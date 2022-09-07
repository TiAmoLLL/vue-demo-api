const express = require('express')
const router = express.Router()
let conn = require('../common/conn')
const tokenAuth = require('../config/tokenAuto')

// 促销

router.get('/getList',tokenAuth,(req, res) => {
    
    let {page,limit} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    const sql = `SELECT * FROM promotion limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
// 总数
router.get('/getTotal',tokenAuth,(req, res) => {
    const sql = `select count(*) from promotion`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
/**
 * {
"id": 1,
"cxname": "促销名称1",
"ksdate": "2022-08-02T16:00:00.000Z",
"jsdate": "2022-08-27T16:00:00.000Z",
"people": "张三",
"zddate": "2022-05-04T06:52:19.000Z",
"zhuangtai": 0
},
 */
// 添加
router.post('/addPromotion',tokenAuth, (req, res) => {
    let {cxname,ksdate,jsdate,people,zddate,zhuangtai,foodname,cxType,originPrice,discount} = req.body
    // console.log(imgUrl,foodname,foodprice,foodkind,kouwei,number);
    const sql = `insert into promotion values(null,'${cxname}','${ksdate}','${jsdate}','${people}','${zddate}',${zhuangtai},'${foodname}','${cxType}',${originPrice},${discount})`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "添加成功"})
    })
})
// 删除
router.post('/deletePromotion',tokenAuth,(req,res)=>{
    let {id} = req.body
    console.log(id);
    const sql = `delete from promotion where id=${id}`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: '删除成功'})
    })
})

// 修改
router.post('/editPromotion',tokenAuth,(req,res)=>{
    console.log('测试');
    console.log(req.body);
    // res.send(req.body)
     let {id,cxname,ksdate,jsdate,people,zddate,zhuangtai,foodname,cxType,originPrice,discount} = req.body;
    //  console.log(sjID,sjName,zizhi,otherZizhi,shangbiao,city,addrss,tel,name);
    const sql = `update promotion set cxname='${cxname}',ksdate='${ksdate}',jsdate='${jsdate}',
    people='${people}',zddate='${zddate}',zhuangtai=${zhuangtai}',foodname=${foodname}',csType='${cxType}',originPrice=${originPrice},discount=${discount} where id=${id}`
    console.log(sql);
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "修改成功"})
    })
})
// 修改状态
router.post('/editPromotionState',tokenAuth,(req,res)=>{
    console.log('测试');
    console.log(req.body);
    // res.send(req.body)
     let {id,zhuangtai,} = req.body;
    //  console.log(sjID,sjName,zizhi,otherZizhi,shangbiao,city,addrss,tel,name);
    const sql = `update promotion set zhuangtai=${zhuangtai} where id=${id}`
    console.log(sql);
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "修改成功"})
    })
})

module.exports = router