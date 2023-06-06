const mongoose = require('mongoose')

const Schema = mongoose.Schema

const entrySchema = new Schema({ 
    title: { type: String, require: true }, 
    message: { type: String, required: true }, 
    user_id: { type: String, required: true }},
    { timestamps: true })

module.exports = mongoose.model('Entry', entrySchema)



