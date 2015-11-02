var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers/index-controller');
var itemController = require('../controllers/item-controller');

/* GET home page. */
router.get('/', indexCtrl.getCtrl);

console.log("haha");

/*Add Item to db */
router.post('/addItem',itemController.addItem);
console.log("add item");

module.exports = router;
