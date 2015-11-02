var dbQuery = require('../db/addItemQuery');
var addItem = function(req, res) {
  console.log("in add Item Controller");
  dbQuery.addItemToDB(req.body.todoItem, function(err, result) {
    if(err) {
      return res.send({status: 500, message: err.message});
    }
    return res.send({status: 200, message: result});
  });
}

module.exports = {
  addItem: addItem
}
