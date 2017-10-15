
var mongoose = require('mongoose');

var toDoSchema = mongoose.Schema({
    task:{
        type:String,
        default: '',
        require:true
    },
    date_created:{
        type: Date,
        default: Date.now
    },
    isCompleted:{
        type:Boolean,
        default: true
    }
});

// so it can be accessed else where
module.exports = mongoose.model('toDo', toDoSchema);