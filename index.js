const express = require('express');
const app = express();

app.listen(8080,function(){
    console.log("going weapon");
})

app.get('/pay',function(req,res){
    res.send("성공입니다.");
})