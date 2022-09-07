const express = require('express')
const router = express.Router()
let conn = require('../common/conn')
router.get('/getList',(req, res) => {
    const sql = 'SELECT * FROM memberCategory'
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        console.log(results);
        res.json({ code: 200, data: results})
    })

})
router.get('/getCategoryName',(req, res) => {
    
    let {name} = req.query
    
    const sql = `SELECT * FROM memberCategory where name like '%${name}%'`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})

        console.log(results);
        res.json({ code: 200, data: results})
    })
})
// 添加
router.post('/addCategory', (req, res) => {
    let {name,zhekou} = req.body
    const sql = `insert into memberCategory values(null,'${name}',${zhekou})`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: '添加成功'})
    })
})
// 删除
router.post('/deleteCategory',(req,res)=>{
    let {id} = req.body
    console.log(id);
    const sql = `delete from memberCategory where id=${id}`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: '删除成功'})
    })
})
// 修改
router.post('/editCategory', (req, res) => {
    let {id,name,zhekou} = req.body
    const sql = `update memberCategory set name='${name}',zhekou='${zhekou}' where id=${id}`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "修改成功"})
    })
})

module.exports = router