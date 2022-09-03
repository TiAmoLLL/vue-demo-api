const express = require('express')
const router = express.Router()
let conn = require('../common/conn')

// 获取所有会员数据
router.get('/getList',(req, res)=>{
    // let {page,limit} = req.query
    let {page,limit} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    // console.log(str);
    let sql =  `SELECT * FROM member limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
// 总数
router.get('/getTotal',(req, res) => {
    const sql = `select count(*) from member`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
router.get('/getMemberName',(req, res) => {
    
    let {page,limit,name} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    const sql = `SELECT * FROM member where hyName like '%${name}%'  limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        console.log(results);
        res.json({ code: 200, data: results})
    })
})
// 添加会员数据
/*
"hyID": 1,
"hyKind": "会员",
"hyName": "张三",
"hyZhekou": "8.5",
"jifen": 3357,
"money": 6666,
"tel": "13312341234",
"xfCishu": 20,
"xfMoney": 8888,
"store": "正常"
*/
router.post('/addMember', (req, res) => {
    let {hyKind,hyName,hyZhekou,jifen,money,tel,xfCishu,xfMoney,store} = req.body
    console.log(hyKind,hyName,hyZhekou,jifen,money,tel,xfCishu,xfMoney,store);
    // console.log(username);
    const sql = `insert into member values(null,'${hyKind}','${hyName}','${hyZhekou}',${jifen},${money},'${tel}',${xfCishu},${xfMoney},'${store}')`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "添加成功"})
    })
})

// 删除

router.post('/deleteMember', (req, res) => {
    let {hyID} = req.body
    console.log(hyID);
    // console.log(username);
    const sql = `delete from member where hyID=${hyID}`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: '删除成功'})
    })
})

// 修改会员数据
// 修改
router.post('/editMember',(req,res)=>{
    console.log('测试');
    console.log(req.body);
    // res.send(req.body)
     let {hyID,hyKind,hyName,hyZhekou,jifen,money,tel,xfCishu,xfMoney,store} = req.body;
    //  console.log(sjID,sjName,zizhi,otherZizhi,shangbiao,city,addrss,tel,name);
    const sql = `update member set hyKind='${hyKind}',hyName='${hyName}',hyZhekou='${hyZhekou}',jifen=${jifen},money=${money},tel='${tel}',xfCishu=${xfCishu},xfMoney=${xfMoney},store='${store}' where hyID=${hyID}`
    console.log(sql);
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "修改成功"})
    })
})
module.exports = router