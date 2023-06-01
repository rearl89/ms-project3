const Entry = require('../models/entryModel')
const mongoose = require('mongoose')

// get all entries
const getEntries = async (req, res) => {
    // makes the newest entries show at the top
    const entries = await Entry.find({}).sort({ createdAt: -1 })
    res.status(200).json(entries)
}

// get an entry
const getEntry = async (req, res) => {
    const { id } = req.params
    // makes sure the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Entry not found' })
    }
    const entry = await Entry.findById(id)
    if (!entry) {
        return res.status(404).json({ error: 'Entry not found' })
    }
    res.status(200).json(entry)
}

// add an entry
const createEntry = async (req, res) => {
    const { title, message } = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!message) {
        emptyFields.push('message')
    }
    if(emptyFields.length>0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // adds entry to DB
    try {
        const entry = await Entry.create({ title, message })
        res.status(200).json(entry)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete an entry
const deleteEntry = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Entry not found' })
    }
    const entry = await Entry.findOneAndDelete({ _id: id })
    if (!entry) {
        return res.status(400).json({ error: 'Entry not found' })
    }
    res.status(200).json(entry)
}

// update an entry
const updateEntry = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Entry not found' })
    }
    const entry = await Entry.findOneAndUpdate({_id: id}, { ...req.body })
    if (!entry) {
        return res.status(400).json({ error: 'Entry not found' })
    }
    res.status(200).json(entry)
}



module.exports = { getEntries, getEntry, createEntry, deleteEntry, updateEntry }