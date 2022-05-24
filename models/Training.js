const mongoose = require('mongoose')

const Training = mongoose.model('Training', {

    name: {
        type: String,
        required: true
    },

    levelTraining: {
        type: String,
        required: true
    }
})

module.exports = Training