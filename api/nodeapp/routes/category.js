var express = require('express');
var router = express.Router();
var getQueryResult=require("../config/db")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/send', function(req, res, next) {
  res.send({"status":200,"message":"Running"})
});
router.post("/add",function(req,res,next){
  var name=req.body.category_name;
  getQueryResult(`insert into category(name) values('${name}')`)
  res.send({
    status :200, message :"working"
  })
});
router.get("/list",async function(req,res,next){
  const data=await getQueryResult(`select * from category`);
  res.send({
    status :200, message :"working",result:data
  })
});
router.get("/getdata",async function(req,res,next){
  var id=req.query.id;
  const data=await getQueryResult(`select * from category where id='${id}'`);
  res.send({
    status :200, message :"working",result:data
  })
});
router.delete("/delete",async function(req,res,next){
  var id=req.body.id;
  console.log(id)
  const data= getQueryResult(`delete from category where id='${id}'`);
  res.send({
    status :200, message :"working"
  })
});
router.post("/update", function(req,res,next){
var name=req.body.category_name;
var id=req.body.id;
const data= getQueryResult(`UPDATE category SET name = '${name}' where id = '${id}'`)
res.send({
  status :200, message :"working"
})
});
module.exports = router;
