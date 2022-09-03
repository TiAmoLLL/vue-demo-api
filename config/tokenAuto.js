let jwt = require('jsonwebtoken')
let {jwtSecretKey} = require('../config/config.js')
// token校验中间件
module.exports = function tokenAuth(req, res, next){
    let token = req.get('Authorization').substring(14)
    // console.log(token);
    // console.log(jwtSecretKey);
    jwt.verify(token, jwtSecretKey, (err, payload) => {
        // console.log('err',err);
        // console.log('payload',payload);
        // console.log('req.payload',req.payload);
        if(err) return res.json({code: -1, msg: '登录状态校验失败，请重新登录'})
        console.log('=================token验证成功===================')
        // req.payload = payload
        next()
    })
}