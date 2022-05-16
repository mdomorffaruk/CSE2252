const mongoose = require('mongoose');
//create table structure...
const NoteSchema = mongoose.Schema({
    roll: String,
    name: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);