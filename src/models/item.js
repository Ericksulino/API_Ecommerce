const mongoose = require("mongoose")

const item = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    categoria:{
        type: String,
        require: true,
    },
    tipo:{
        type: String,
        require: true,
    },
    descricao:{
        type: String,
        require: true,
    },
    valor:{
        type: Float,
        require: true,
    },
    anunciante: {
        type: String,
        require: true,
    },
    data:{
        type: Date,
        default: Date.now(),
    }
})