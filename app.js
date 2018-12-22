const express = require("express");
const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});


app.get("/about", function (req, res){
  res.render("about");
})

app.get("/services", function(req, res){
  res.render("services");
});

app.get("/contact", function(req,res){
  res.render("contact");
});

app.post("/addpost", function(req,res){
  res.render("submitpost")
})


app.listen(3000, function(){
  console.log("Server Started");
})