const express = require('express')
const router = express.Router()
let conn = require('../common/conn')

router.get('/getList',(req, res)=>{
    // let {page,limit} = req.query
    // page = (page-1)*limit
    // console.log(str);
    let sql =  `SELECT * FROM business`
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, data: results})
    })
})
/**
 * "sjID": "485",
"sjName": "小菜馆",
"zizhi": "http://dummyimage.com/200x100&text=资质",
"otherZizhi": "http://dummyimage.com/200x100&text=其他资质",
"shangbiao": "http://dummyimage.com/200x100&text=商标",
"city": "河北省 邯郸市",
"addrss": "西藏自治区 昌都地区 察雅县",
"tel": "18155315236",
"name": "邹超"
 */
router.post('/editBusiness',(req,res)=>{
    console.log('测试');
    console.log(req.body);
    // res.send(req.body)
     let {sjID,sjName,zizhi,otherZizhi,shangbiao,city,address,tel,name} = req.body;
     console.log(sjID,sjName,zizhi,otherZizhi,shangbiao,city,address,tel,name);
    const sql = `update business set sjName='${sjName}',zizhi='${zizhi}',otherZizhi='${otherZizhi}',shangbiao='${shangbiao}',city='${city}',address='${address}',tel='${tel}',name='${name}' where sjID='${sjID}'`
    console.log(sql);
    conn.query(sql, (error, results) => {
        if (error) return res.json({ code: 10001, message: error})
        res.json({ code: 200, message: "添加成功"})
    })
})

module.exports = router