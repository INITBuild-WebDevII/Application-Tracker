const mongoose = require('mongoose');

const acceptedSchema = new mongoose.Schema({
    userID : {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    items:[
        {descr: String}
    ]
});

module.exports = mongoose.model("AcceptedList", acceptedSchema);