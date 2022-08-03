const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   descripition: {
      type: String,
      required: true,
   },
   tag: {
      type: String,
      default: "General"
   },
   date: {
      type: Date,
      default: Date.now
   }
})

module.exports = mongoose.model('notes', NotesSchema);