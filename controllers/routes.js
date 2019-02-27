// Inside the burgers_controller.js file, import the following:



// Express
// burger.js



// Create the router for the app, and export the router at the end of your file.

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index",{burger_data});
    })
});

router.put("/burgets/update",function(req,res){
    burger.update(req.body.burger_id,function(result){
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;