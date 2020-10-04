const { response } = require('express');
const express = require('express');
const router = express.Router();
const moment = require('moment');
//const conn = require('../scripts/issuestable');

var mysql = require('mysql');
var dbconfig = require('../config/db');


var ts = moment().format('YYYY-MM-DD H:mm:ss')

router.get("/", function(req,res){
    res.render('main')
    
})

router.post('/add-issue',(req, res)=>{
    var connection = mysql.createConnection(dbconfig.connection);

    console.log(req.body)
    name = req.body.name;
    
    console.log(ts)
    issue = req.body.issue;
    sql = 'INSERT INTO '+dbconfig.database+'.issue_table ( `user`, `issue`,`isopen`,`ts`) values (?,?,?,?)'
    data = [name, issue, true, ts]
    connection.query(sql,data, (result)=>{
        //console.log(result)
    })
    res.redirect('/api/list-issues')
    connection.end();

})

var connection = mysql.createConnection(dbconfig.connection);



var sql =' SELECT *, DATE_FORMAT(ts, "NaN/%m/%y %H:%i:%s") As date FROM sql12368392.issue_table where 1=1 and isopen =? order by date DESC LIMIT 10 OFFSET ?';
connection.query(sql,[1,1],(ress)=>{
    console.log(ress)
})
    

router.get("/list-issues",(req, res)=>{
    
    var connection = mysql.createConnection(dbconfig.connection);
    var _query = req.query;
    //console.log(query.page)
console.log(req.query)
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
        if(req.query.page){

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
        console.log(params)
        console.log(sql,params)
        connection.query(sql,params,(err, result)=>{
            console.log(result)
            connection.end();
            return res.render('main', {issueslist : result})
        })

    
    }

    

    else {
        console.log("ssa")
        sql = 'SELECT *, DATE_FORMAT(ts, "%d/%m/%y %H:%i:%s") As date FROM ' +dbconfig.database+'.issue_table \
        order by date DESC';
        console.log("aaas")
        connection.query(sql,(err, result)=>{
            //console.log(result)
            connection.end()
            //console.log(result)
            res.render('main', {issueslist : result})
        })
    }
        
    
})
    
router.patch("/update-issue/:id",(req, res)=>{
    var connection = mysql.createConnection(dbconfig.connection);
    var id = Number(req.params.id);
    var name = "thaarun";

    sql = 'UPDATE '+dbconfig.database+'.'+dbconfig.issues+' SET `user` =? where id = ?';
    
    connection.query(sql,[name,id],(result)=>{
        console.log(result)
        return res.redirect('/api/list-issues')
    })
    connection.end()
    
})

var check = require('./conn');
//router.use(check)

router.delete("/delete-issue/:id",(req, res)=>{


    var connection = mysql.createConnection(dbconfig.connection);
    var id = Number(req.params.id);
    sql = 'DELETE FROM '+dbconfig.database+'.'+dbconfig.issues+' where id = ?';
    connection.query(sql,id,(result)=>{
        console.log(result)
        res.status(200).send("deleted")
    })
    connection.end()
    
})
module.exports = router;
