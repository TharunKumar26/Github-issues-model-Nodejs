const { response } = require('express');
const express = require('express');
const router = express.Router();
const moment = require('moment');
//const conn = require('../scripts/issuestable');

var mysql = require('mysql');
const { issues } = require('../config/db');
var dbconfig = require('../config/db');


var ts = moment().format('YYYY-MM-DD H:mm:ss')

router.get("/", function(req,res){
    res.render('main')
    
})

router.post('/add-issue',(req, res)=>{
    var connection = mysql.createConnection(dbconfig.connection);

    //console.log(req.body)
    user = req.body.user;
    
    //console.log(ts)
    issue = req.body.issue;
    sql = 'INSERT INTO '+dbconfig.database+'.issue_table ( `user`, `issue`,`isopen`,`ts`) values (?,?,?,?)'
    data = [user, issue, true, ts]
    connection.query(sql,data, (result)=>{
        //console.log(result)
    })
    res.redirect('/api/list-issues')
    connection.end();

})

var connection = mysql.createConnection(dbconfig.connection);



router.get("/list-issues",(req, res)=>{
    
    var connection = mysql.createConnection(dbconfig.connection);
    var _query = req.query;
    var pages = 0;
    var sql1 = null;
    var temp = null;



    if(Object.keys(req.query).length!=0){
        var params = [];
        sql = 'SELECT *, DATE_FORMAT(ts, "%d/%m/%y %H:%i:%s") As date FROM ' +dbconfig.database+'.issue_table where 1=1 ';
        if(req.query.show){
            if(req.query.show == 'open'){
                sql +='and isopen =? '
                params.push(Number(1))
            }
            if(req.query.show == 'closed'){
                sql +='and isopen =? '
                params.push(0)
            }
        }
        
        sql += 'order by date DESC '
        temp =  sql;
        if(req.query.page){
            sql1 = sql
            sql += 'LIMIT 10 OFFSET ? '
           
            params.push(Number((req.query.page-1)*10))
        }
        if(req.query.id){
            params = []

            var id = req.query.id;
            sql = 'SELECT *, DATE_FORMAT(ts, "%d/%m/%y %H:%i:%s") As date FROM ' +dbconfig.database+'.issue_table \
where id = ?';
            params.push(Number(id))
            //console.log(params)
        }
       
        if(sql1 != null){
            connection.query(sql1,params,(err, result)=>{
                pages = result.length
               
           
            })
        }
        connection.query(sql,params,(err, result)=>{
            if(pages == 0){
                pages = result.length;
            }
            connection.end();

            return res.status(200).send({data:result,page:pages})
        })

    
    }

    

    else {

        sql = 'SELECT *, DATE_FORMAT(ts, "%d/%m/%y %H:%i:%s") As date FROM ' +dbconfig.database+'.issue_table \
        order by date DESC';
       
        connection.query(sql,(err, result)=>{
            if(result){
            page = result.length;
            }
            //console.log(result);
            connection.end();
            return res.status(200).send({data :result, page:page})
        })
    }
        
    
})


router.patch("/update-issue/:id",(req, res)=>{
    var connection = mysql.createConnection(dbconfig.connection);
    var id = Number(req.params.id);
    var user = req.body.user;
    var issue = req.body.issue;

    //console.log(req.body)

    sql = 'UPDATE '+dbconfig.database+'.'+dbconfig.issues+' SET `user` =?, `issue` = ?, `ts`=? where id = ?';
    
    connection.query(sql,[user, issues, ts, id],(result)=>{
        //console.log(result)
        return res.redirect('/api/list-issues')
    })
    connection.end()
    
})


router.get("/page-stats",(req,res)=>{
    var connection = mysql.createConnection(dbconfig.connection);
    var open=0;
    var closed=0;

    function getstats(callback){
        sql = 'SELECT *, DATE_FORMAT(ts, "%d/%m/%y %H:%i:%s") As date FROM ' +dbconfig.database+'.issue_table \
        WHERE `isopen` = ? order by date DESC';
       
        connection.query(sql,1,(err, result)=>{
       
            if(result){
                open = result.length;
               
            }

            
            
        })
        connection.query(sql,0,function(err, result){
          
            if(result){
                closed = result.length
            }
            connection.end();
           return callback(open, closed)
        },
        
        )
        
        

    }
    getstats(function(open,closed){
        return res.send({open:open,closed:closed})
    })


  
        
        
    
   })
var check = require('./conn');
//router.use(check)

router.delete("/delete-issue/:id",(req, res)=>{


    var connection = mysql.createConnection(dbconfig.connection);
    var id = Number(req.params.id);
    sql = 'DELETE FROM '+dbconfig.database+'.'+dbconfig.issues+' where id = ?';
    connection.query(sql,id,(result)=>{
       // console.log(result)
        res.status(200).send("deleted")
    })
    connection.end()
    
})
module.exports = router;
