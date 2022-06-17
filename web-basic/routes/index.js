const bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var database = require('../database.json')
console.log(database)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('project1')   
  
});

router.get('/day1-1',function(req,res,next){
  res.render('day1-1')
})

router.get('/day1-2',function(req,res,next){
  res.render('day1-2')
})

router.get('/day2', function(req,res,next){
  res.render('day2')
})

router.get('/data',function(req, res, next){
  const data = req.query
  console.log(data)
  if (data.value == 'day1-1'){
    res.redirect(`http://localhost:3000/day1-1`)
  }
  else if(data.value == 'day1-2'){
    res.redirect(`http://localhost:3000/day1-2`)
  }
  else if(data.value == 'day2'){
    res.redirect(`http://localhost:3000/day2`)
  }  
})



 
module.exports = router;

/*function func1(){

  var e = document.getElementById("storeID");
  var strUser = e.options[e.selectedIndex].value;

  console.log(strUser)
}*/
let keybox={name:"",level:'' }

router.get('/login',function(req, res, next){
  res.render('project2')
  keybox.name ='', keybox.level=''
})



router.post('/login-check', function(req, res, next){
  const id = req.body.id
  const password = req.body.password
  for(let i=0; i<database.length; i++){
    if(id == database[i].id){
      if(password == database[i].password){
        res.redirect('http://localhost:3000/login/success')
        

        keybox.name = database[i].name
        keybox.level = database[i].level
        break
      }
      else{
        res.redirect('http://localhost:3000/login/')
      }
    }
    
    
  }
  res.redirect('http://localhost:3000/login/')


})

router.get('/login/success',function(req,res,next){

  if ((typeof keybox.name =='undefined'|| keybox.name=='')|| (typeof keybox.level == 'undefined'||keybox.level=='')){
    res.redirect('http://localhost:3000/login/')

  }
  else{
    res.render('success',{userinfo: {name: keybox.name ,level:keybox.level }})

  }

  
})