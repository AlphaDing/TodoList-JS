var getCtrl = function(req, res, next) {
  res.render('index', { title: 'Express' });
}

var postCtrl = function(){

}

module.exports = {
  getCtrl: getCtrl,
  postCtrl: postCtrl
}
