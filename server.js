const express = require('express')
const app = express();
/*const mongoose = require('mongoose')
const bp = require('body-parser')
const db = require('./db/db')
app.use(bp.urlencoded({
  extended : false
}))

app.use(bp.json())

mongoose.connect('mongodb+srv://geepesh_agrawal:geepeshagrawal@cluster0.n8viw.mongodb.net/message-database?retryWrites=true&w=majority',{
  useNewUrlParser : true,
  useUnifiedTopology : true
}).then(()=>{
  console.log('database connected')
})

app.post('/',(req,res)=>{
  let dta = req.body.data;
  const data = new db({data : dta}) 
  data.save().then(()=>{
    console.log('data saved successesfully')
    res.render('res',{
      dta : dta
    })
  })
  
})
*/


app.set('view engine','ejs')
app.use(express.json())
app.get('/',(req,res)=>{
  res.render('home')
})






app.listen(3000,()=>{
    console.log('====================================');
    console.log('started');
    console.log('====================================');
})