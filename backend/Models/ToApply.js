const mongoose = require('mongoose');

const toApplySchema = new mongoose.Schema({
    userID : {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    items:[
        {descr: String}
    ]
});

module.exports = mongoose.model("ToApplyList", toApplySchema);