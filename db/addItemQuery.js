var mysqlConnection = require('./config.js');
var addItemToDB = function (itemContent, cb) {
  console.log('about to add item to DB: ' + itemContent);
  var dbQuery = 'INSERT INTO Item ( content ) VALUES ("' + itemContent + '")';
  mysqlConnection.connect();
  mysqlConnection.query(dbQuery, function (err, result) {
    if(err) {
      return cb(err, result);
    }
    mysqlConnection.end();
    return cb(null, result);
  });
}

module.exports = {
  addItemToDB: addItemToDB
}

