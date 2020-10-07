var assert = require('assert')
let chai = require('chai');
let chaiHttp = require('chai-http');
const { resolveMx } = require('dns');
let server = require('../server');
let should = chai.should();
var expect    = require("chai").expect;
var moment = require('moment');
const { issues } = require('../config/db');

chai.use(chaiHttp)


var ts = moment().format('YYYY-MM-DD H:mm:ss')

describe('Test',function(){
    it('test 1', function(){
       expect(1+1).to.equal(2) 
    })
})

describe('Get',()=>{
   it('get the issues list', ()=>{
        chai.request(server).get('/api/list-issues').end((err, res)=>{
                //console.log(res.body.data)
                //res.should.exist(res.body);
                //res.should.have.status(200);
                res.body.should.be.an('object')
                expect(res).to.have.status(200);
                //expect(res.body).to.be.a('array');
                res.body.should.be.a('object');
               // res.body.count.should.be.eql(0);
            
            })
   })
   it('get the issues list by id let id =26', ()=>{
    let id = 25;
    chai.request(server).get('/api/list-issues?id=33').end((err, res)=>{
    
            res.body.should.be.an('object')
            expect(res).to.have.status(200);
            res.body.should.be.a('object');
            res.body.data.length.should.be.eql(1);
        
    
})
})
    it('Add an issue (POST)', ()=>{
        let id = 25;

        let issue ={
            user : "test6",
            issue : 'test6',
            isopen: true,
            ts : ts
        }
        chai.request(server).post('/api/add-issue').send(issue).end((err, res)=>{
                //console.log(res.body)
                res.body.should.be.an('object')
               // expect(res).to.have.status(200);
                res.body.should.be.a('object');
                
            
        
    })
    })
    it('Update a issue (POST) /api/update-issue/:id', ()=>{
        let id = 25;

        let issue ={
            user : "test10",
            issue : 'test10',
            isopen: true,
            ts : ts
        }
        chai.request(server).patch('/api/update-issue/25').send(issue).end((err, res)=>{
                //console.log(res.body)
                res.body.should.be.an('object')
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                
            
        
    })
    })
    it('Delete a issue (delete) /api/delete-issue/:id', ()=>{
        let id = 25;

     
        chai.request(server).delete('/api/delete-issue/25').end((err, res)=>{
                //console.log(res.body)
                res.body.should.be.an('object')
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                
            
        
    })
    })
    it('get issues stats (GET) /api/page-stats', ()=>{
        let id = 25;

     
        chai.request(server).get('/api/page-stats').end((err, res)=>{
                //console.log(res.body)
                res.body.should.be.an('object')
                expect(res).to.have.status(200);
                res.body.should.be.a('object');
                
            
        
    })
    })

})