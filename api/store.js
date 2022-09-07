const express = require('express')
const router = express.Router()
let conn = require('../common/conn')
const tokenAuth = require('../config/tokenAuto')
router.get('/getList',tokenAuth,(req, res) => {
    
    let {page,limit} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    const sql = `select * from store limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
// 总数
router.get('/getTotal',tokenAuth,(req, res) => {
    const sql = `select count(*) from store`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
// 模糊查询门店
router.get('/getStoreName',tokenAuth,(req, res) => {
    
    let {page,limit,name} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    const sql = `SELECT * FROM store where mdName like '%${name}%'  limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})

        console.log(results);
        res.json({ code: 200, data: results})
    })
})
/**
 * {
"id": 1,
"bianma": "MD000329",
"mdName": "小菜馆",
"quyu": "澳门特别行政区",
"address": "山西省",
"tel": "18161712262",
"date": "2022-09-01T02:45:13.000Z",
"people": 3,
"state": 1
}
 */
// 添加food
router.post('/addStore',tokenAuth, (req, res) => {
    let {bianma,mdName,quyu,address,tel,date,people,state} = req.body
    console.log(bianma,mdName,quyu,address,tel,date,people,state);
    const sql = `insert into store values(null,'${bianma}','${mdName}','${quyu}','${address}','${tel}','${date}',${people},'${state}')`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "添加成功"})
    })
})
// 删除
router.post('/deleteStore',tokenAuth,(req,res)=>{
    let {id} = req.body
    console.log(id);
    const sql = `delete from store where id=${id}`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: '删除成功'})
    })
})

// 修改
router.post('/editStore',tokenAuth,(req,res)=>{
    console.log('测试');
    console.log(req.body);
    // res.send(req.body)
     let {id,bianma,mdName,quyu,address,tel,date,people,state} = req.body;
    //  console.log(sjID,sjName,zizhi,otherZizhi,shangbiao,city,addrss,tel,name);
    const sql = `update store set bianma='${bianma}',mdName='${mdName}',quyu='${quyu}',address='${address}',tel='${tel}',date='${date}',people=${people},state='${state}' where id=${id}`
    console.log(sql);
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "修改成功"})
    })
})

module.exports = router