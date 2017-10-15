var toDo = require('../models/todos.js');

module.exports = {

    find: function(params, callback){
        toDo.find(params, function(err, todo){
            if(err){
                callback(err, null);
                return
            }
            callback(null, todo);
        }).limit(50);
    },

};