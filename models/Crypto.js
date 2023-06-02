const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    last:{
        type: String,
        required: true
    },
    buy:{
        type:String,
        required: true
    },
    sell:{
        type:String,
        required: true
    },
    volume:{
        type:String,
        required: true
    },
    base_unit:{
        type:String,
        required: true
    },
    // quote_unit:{
    //     type: String,
    //     required: true
    // }
});

const Crypto = mongoose.model('Crypto',cryptoSchema);
module.exports = Crypto;