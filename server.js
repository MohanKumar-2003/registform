const express=require('express')
const body_parser=require('body-parser')
const pool=require('./database')
const app=express()
app.use(express.static(__dirname))
app.use(body_parser.json())
app.set('view engine','ejs')
app.use(body_parser.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.post('/',function(req,res){
    var fname=req.body.fname
    var lname=req.body.lname
    var mail=req.body.mail
    var phone=req.body.phone
    var gender=req.body.gender
    var age=req.body.age
    var join=req.body.join
    var curr=req.body.cur_date
    var year=req.body.years
    var sql="INSERT INTO t_reg(fname,lname,mail_id,ph_num,gender,age,join_date,curr_date,years) VALUES(?,?,?,?,?,?,?,?,?);"
    pool.query(sql,[fname,lname,mail,phone,gender,age,join,curr,year],function(err,result){
        if (err) throw err
        res.redirect('/frontend')
    })
})
app.get('/frontend',function(req,res){
    var sql="SELECT * FROM t_reg;"
    pool.query(sql,function(err,result){
        if(err) throw err;
        res.render(__dirname+'/frontend',{employeedetails:result})
    })
})
app.listen(3000)
