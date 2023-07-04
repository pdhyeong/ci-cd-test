const express = require('express');
const app = express();

app.listen(5050,function(){
    console.log("going weapon");
})

app.get('/pay',function(req,res){
    res.send("성공입니다. ㅎㅎ");
})