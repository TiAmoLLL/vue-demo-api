const express = require('express')
const router = express.Router()
let conn = require('../common/conn')
const tokenAuth = require('../config/tokenAuto')
router.get('/getList',(req, res) => {
    
    let {page,limit} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    const sql = `SELECT * FROM food limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        console.log(results);
        res.json({ code: 200, data: results})
    })
})
// 模糊查询菜品
router.get('/getFoodName',(req, res) => {
    
    let {page,limit,name} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    const sql = `SELECT * FROM food where foodname like '%${name}%'  limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})

        console.log(results);
        res.json({ code: 200, data: results})
    })
})
router.get('/getFoodId',(req, res) => {
    
    let {id} = req.query
    const sql = `SELECT * FROM food where id like '${id}'`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})

        console.log(results);
        res.json({ code: 200, data: results})
    })
})
// router.get('/getFoodId',tokenAuth,(req, res) => {
    
//     let {id} = req.query
//     const sql = `SELECT * FROM food where id like '${id}'`
//     conn.query(sql, (error, results) => {
//         if (error) return res.json({ code: 10001, message: error})

//         console.log(results);
//         res.json({ code: 200, data: results})
//     })
// })
// 总数
router.get('/getTotal',(req, res) => {
    const sql = `select count(*) from food`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
// 添加food
router.post('/addFood', (req, res) => {
    let {imgUrl,foodname,foodprice,foodkind,kouwei,number,minnumber,maxnumber,zhuangtai} = req.body
    console.log(imgUrl,foodname,foodprice,foodkind,kouwei,number);
    const sql = `insert into food values(null,'${imgUrl}','${foodname}',${foodprice},'${foodkind}','${kouwei}',${number},${minnumber},${maxnumber},'${zhuangtai}')`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "添加成功"})
    })
})
// 删除
router.post('/deleteFood',(req,res)=>{
    let {id} = req.body
    console.log(id);
    const sql = `delete from food where id=${id}`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: '删除成功'})
    })
})

// 修改
router.post('/editFood',(req,res)=>{
    console.log('测试');
    console.log(req.body);
     let {id,imgUrl,foodname,foodprice,foodkind,kouwei,number,minnumber,maxnumber,zhuangtai} = req.body;
    const sql = `update food set imgUrl='${imgUrl}',foodname='${foodname}',foodprice=${foodprice},
    foodkind='${foodkind}',kouwei='${kouwei}',number=${number},minnumber=${minnumber},maxnumber=${maxnumber},zhuangtai='${zhuangtai}' where id=${id}`
    console.log(sql);
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "修改成功"})
    })
})

module.exports = router