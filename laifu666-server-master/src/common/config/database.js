const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: '',//你的数据库名称
    prefix: 'hiolabs_',//勿动
    encoding: 'utf8mb4',//勿动
    host: '127.0.0.1',//勿动
    port: '3306',//勿动
    user: 'root',//勿动
    password: '',//你的密码
    dateStrings: true
};
