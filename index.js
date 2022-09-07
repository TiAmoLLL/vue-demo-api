const express = require('express')

const app = express();

const cors = require('cors')

app.use(cors())

const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const config = require('./config/config')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// const {conn} = require('./common/conn')
// const mysql = require('mysql');
// let conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'restaurant',
//     multipleStatements: true
// })
// conn.connect();

let conn = require('./common/conn')

app.listen(3000, () => {
    console.log('——————————服务已启动——————————');

})
console.log(expressJwt);
app.use(expressJwt({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api/] }))
let userRouter = require('./api/user')
// 使用中间件解析token

let memberRouter = require('./api/member')
let businessRouter = require('./api/business')
let foodRouter = require('./api/food')
let storeRouter = require('./api/store')
let materialRouter = require('./api/material')
let promotionRouter = require('./api/promotion')
let memberCategoryRouter = require('./api/memberCategory')
app.use('/api/category',memberCategoryRouter)
app.use('/api/promotion',promotionRouter)
app.use('/api/material',materialRouter)
app.use('/api/store',storeRouter)
app.use('/api/food',foodRouter)
app.use('/api/business',businessRouter)
app.use('/api/user',userRouter)
app.use('/api/member',memberRouter)
app.get('/', (req, res) => {
    res.send('<p style="color:pink">服务已启动</p>');
})
 

// app.get('/api/getUserList', (req, res) => {
//     const sqlStr = 'SELECT * FROM user'
//     conn.query(sqlStr, (error, results) => {
//         if (error) return res.json({ code: 10001, message: error})
//         res.json({ code: 10000, message: results})
//     })
// })
// app.post('/api/getList', (req, res) => {
    
//     let {username,password} = req.body
//     console.log(username, password);
//     console.log(username);
//     const sql = `insert into user values(null,'${username}','${password}','fagag')`
//     console.log(sql)
//     conn.query(sql, (error, results) => {
//         if (error) return res.json({ code: 10001, message: error})
//         res.json({ code: 10000, message: results})
//     })
// })