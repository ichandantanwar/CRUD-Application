var express = require('express');
var router = express.Router();
var getQueryResult=require("../config/db")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/send', function(req, res, next) {
  res.send({"status":200,"message":"loaded"})
});
router.post("/add",function(req,res,next){
  
  var name=req.body.product_name;
  var category_id=req.body.category_id;
  getQueryResult(`insert into product(name,category_id) values('${name}','${category_id}')`)
  res.send({
    status :200, message :"loaded"
  })
})
router.get("/list",async function(req,res,next){
  const data=await getQueryResult(`select a.*,b.name as cat_name from product as a join category as b on a.category_id=b.id`);
  res.send({
    status :200, message :"loaded",result_P:data
  })
});
router.get("/getdata",async function(req,res,next){
  var id=req.query.id;
  console.log(id)
  const data=await getQueryResult(`select * from product where id='${id}'`);
  res.send({
    status :200, message :"get",result_P:data
  })
});
router.delete("/delete",async function(req,res,next){
  var id=req.body.id;
  console.log(id)
  const data= getQueryResult(`delete from product where id='${id}'`);
  res.send({
    status :200, message :"loaded"
  })
});
router.post("/update", function(req,res,next){
var name=req.body.product_name;
var id=req.body.id;
var category_id=req.body.category_id;
const data= getQueryResult(`UPDATE product SET name = '${name}' , category_id = '${ category_id}' where id = '${id}'`)
res.send({
  status :200, message :"working"
})
});

module.exports = router;
