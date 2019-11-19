const express = require("express");
const adminrouter = express();

adminrouter.get("/",function(request,response){
    response.send("all admin");
});

adminrouter.get("/:No",function(request,response){
    response.send("admin no : "+ request.params.No);
});

module.exports = adminrouter;