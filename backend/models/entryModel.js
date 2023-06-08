const mongoose = require('mongoose')

const Schema = mongoose.Schema
// DB Stucture
const entrySchema = new Schema({ 
    title: { type: String, require: true }, 
    message: { type: String, required: true }, 
    user_id: { type: String, required: true }},
    // Automatically timestamps an entry when created and added to DB
    { timestamps: true })

module.exports = mongoose.model('Entry', entrySchema)



