const express = require('express')
const router = express.Router()
let conn = require('../common/conn')

router.get('/getList',(req, res) => {
    
    let {page,limit} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    const sql = `select * from material limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
// 模糊查询菜品
router.get('/getMaterialName',(req, res) => {
    
    let {page,limit,name} = req.query
    if(page){
        page = (page-1)*limit
    }else{
        page=0;
        limit = 5
    }
    const sql = `SELECT * FROM material where tlname like '%${name}%'  limit ${page},${limit}`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})

        console.log(results);
        res.json({ code: 200, data: results})
    })
})
// 总数
router.get('/getTotal',(req, res) => {
    const sql = `select count(*) from material`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
/**
 * {
"{
"id": 1,
"number": 77,
"kucun": "袋",
"tlname": "鸡精",
"guige": "20克/袋",
"leibie": "调味品"
}
}
 */
// 添加food
router.post('/addMaterial', (req, res) => {
    let {number,kucun,tlname,guige,leibie,minnumber,maxnumber} = req.body
    // console.log(bianma,mdName,quyu,address,tel,date,people,state);
    const sql = `insert into material values(null,'${number}','${kucun}','${tlname}','${guige}','${leibie}',${minnumber},'${maxnumber}')`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "添加成功"})
    })
})
// 删除
router.post('/deleteMaterial',(req,res)=>{
    let {id} = req.body
    console.log(id);
    const sql = `delete from material where id=${id}`
    console.log(sql)
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: '删除成功'})
    })
})

// 修改
router.post('/editMaterial',(req,res)=>{
    console.log('测试');
    console.log(req.body);
    // res.send(req.body)
     let {id,number,kucun,tlname,guige,leibie,minnumber,maxnumber} = req.body;
    //  console.log(sjID,sjName,zizhi,otherZizhi,shangbiao,city,addrss,tel,name);
    const sql = `update material set number='${number}',kucun='${kucun}',tlname='${tlname}',guige='${guige}',leibie='${leibie}',minnumber=${minnumber},maxnumber=${maxnumber} where id=${id}`
    console.log(sql);
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "修改成功"})
    })
})

module.exports = router