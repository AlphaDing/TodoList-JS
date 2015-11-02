var mysql  = require('mysql');
var connection = mysql.createConnection({
    user     : 'root',
    password : '',
    database : 'ToDoList'
});


module.exports = connection;
