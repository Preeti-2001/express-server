//jshint esversion: 6
const express= require("express");
const app=express();

app.listen(3000,function(){
  console.log("server started on port 3000");
});
app.get("/",function(req,res){
  res.send("<h1>Helloooooo</h1>");
});
app.get("/contact",function(req,res){
  res.send("email me at- preeti@preeti.com");
});
app.get("/about",function(req,res){
  res.send("keen learner and a student of btech csit ");
});
app.get("/hobbies",function(req,res){
  res.send("<h1>BAKAETIII</h1>");
});
