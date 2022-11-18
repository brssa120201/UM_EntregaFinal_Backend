const mongoose = require("mongoose");

const booksSchema  = mongoose.Schema({
    titulo_libro:{
        type: String
    },
    autor:{
        type: String
    },
    editorial:{
        type: String
    },
    cant_paginas:{
        type: Number
    },
    genero:{
        type: String
    }
})
module.exports = mongoose.model("Books", booksSchema);