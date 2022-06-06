var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/signUp', function(req,res){
  console.log(req.body);
  // MongoClient.connect('mongodb://localhost:27017/mydb',function(err,client){
  //   if (err)
  //     console.log("failed");
  //   else
  //     // console.log("connected")
  //     client.db('TRUEBUS').collection('users').insertMany(req.body)
  // })

})

module.exports = router;
