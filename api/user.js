const express = require('express')
const router = express.Router()
let conn = require('../common/conn')
const { jwtSecretKey, expiresIn } = require('../config/config')
// 导入jsonwebtoken包用于生成token
let jwt = require('jsonwebtoken')
router.get('/getUserList',(req, res) => {
    const sql = 'SELECT * FROM user'
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })

})
router.post('/getList', (req, res) => {
    let {username,password} = req.body
    console.log(username, password);
    console.log(username);
    const sql = `insert into user values(null,'${username}','${password}','fagag')`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})

router.post('/toLogin', (req, res) => {
    console.log(1);
    let {username,password} = req.body
    console.log(username,password);
    console.log(2);
    const sql = `select * from user where username='${username}'`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        // console.log(results[0].password);
        if(results.length){
            if(password === results[0].password){
                const user = { ...results[0] }
                let token = jwt.sign(user, jwtSecretKey,{expiresIn}) 
                res.json({ code: 200,msg:'成功' ,token: 'Bearer ' + token});
            }else{
                res.json({ code: 10001,msg:'账号或密码错误' })
            }
        }else{
            res.json({ code: 10001,msg:'账号或密码错误' })
        }
        
    })
})

module.exports = router