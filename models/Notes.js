const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    noteColor: {
        type: String,
        required: true,
    },
    noteName: {
        type: String,
        required: true,
    },
    noteInfo: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('notes', NotesSchema)