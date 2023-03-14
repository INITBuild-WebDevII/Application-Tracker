const mongoose = require('mongoose');

const appliedSchema = new mongoose.Schema({
    userID : {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    items:[
        {descr: String}
    ]
});

module.exports = mongoose.model("AppliedList", appliedSchema);