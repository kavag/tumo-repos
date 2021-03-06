var express = require('express');
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello World</h1>");
});

app.get("/:name", function(req, res) {
    var name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
});

app.listen(3000, function(){
   console.log("Connection was installed.");
});