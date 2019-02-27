// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burger",function(res){
            cb(res);
        })
    }, 
    update: function(id,cb){
        orm.update("burgers",id,cb);
    }
}

module.exports = burger;




