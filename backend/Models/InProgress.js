const mongoose = require('mongoose');

const inProgressSchema = new mongoose.Schema({
    userID : {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    items:[
        {descr: String}
    ]
});

module.exports = mongoose.model("InProgressList", inProgressSchema);