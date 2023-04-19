const {createConnection}=require('mysql')

const pool=createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'regisform'
},console.log('Connected'))

module.exports=pool