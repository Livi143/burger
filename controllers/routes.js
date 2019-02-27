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

router.put("/burgers/update",function(req,res){
    console.log("this is the burger", req.body);
    burger.update(req.body.burger_id,function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/create", function(req,res){
    console.log("this is the burger", req.body);
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
})

module.exports = router;