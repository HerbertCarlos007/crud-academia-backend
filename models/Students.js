const mongoose = require('mongoose')

const Students = mongoose.model('Students', {

    name: {
        type: String,
        required: true
    },
    email: String,
    cpf: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },

    genre: String,
    telephone: String,
    trainingLevel: String
})

module.exports = Students