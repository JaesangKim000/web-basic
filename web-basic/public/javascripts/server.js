const express = require('express');
const { redirect, send } = require('express/lib/response');
const res = require('express/lib/response');


const app = express()
const port = 3000;



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// index.html 
app.use(express.static('./'))

app.use(express.urlencoded({extended:true}))

var toString = Object.prototype.toString;

//_.isString = function (obj) {
  //return toString.call(obj) == '[object String]';
//}
app.get('/data', (req, res) =>{
    const data = req.query
    console.log(data);
    console.log(data.number)
    console.log(data.tytle)
    console.log(typeof data.number)
    if(typeof data.number == 'undefined'){


    
        for(let i=0; i<database.length; i++){
            if(database[i].tytle==data.tytle){
                res.send(database[i])
                break
            }
        }
    }
    if(typeof data.tytle == 'undefined'){

    
        for(let i=0; i<database.length; i++){
            if(database[i].number==data.number){
                res.send(database[i])
                break
            }
            
                
            }
        }

}
)

const database = []
const databox = []
const smallbox = []
// 후기 등록시 데이터 접근
app.post('/data', (req,res) =>{
    

    let p_tytle = req.body.tytle
    smallbox.push(p_tytle)
    let p_article = req.body.article
    let p_number = smallbox.indexOf(p_tytle)
    database.push({"tytle": p_tytle ,"article": p_article, "number":p_number})
    console.log(database)
    res.redirect(`http://localhost:${port}`)
     //database 라는 배열에 차곡차곡 정렬되겠지??
    /*Object.defineProperty(data, 'number', {
        value: database.indexOf(data),
        writable: true
      });*/
    /*new_data = { data, "number": database.indexOf(data)}
    databox.push(new_data)
    console.log(database)
    console.log(database.indexOf(data))
    console.log(databox)
    res.redirect(`http://localhost:${port}`)*/ //다시 페이지로...
    
    

})

/*router.post('/data',(req, res) => {
    const database = []

    const data = {
        title : req.body.title,
        article : req.body.article
    }
    database.push(data)

    res.send(database)


})*/


console.log(`http://localhost:${port}/data`)
console.log(`http://localhost:${port}/home`)