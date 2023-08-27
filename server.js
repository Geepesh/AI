const express = require('express')
const app = express();


app.set('view engine','ejs')
app.use(express.json())
app.get('/',(req,res)=>{
  res.render('home')
})






app.listen(4700,()=>{
    console.log('====================================');
    console.log('started');
    console.log('====================================');
})