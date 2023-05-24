const express = require('express')
const Entry = require('../models/entryModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'GET all posts' })
})

router.get('/:id', (req, res) => {
    res.json({ message: 'GET a post' })
})

router.post('/', async (req, res) => {
    const { title, message } = req.body
    try {
        const entry = await Entry.create({ title, message })
        res.status(200).json(entry)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a post'})
})

router.patch('/:id', (req, res) => {
    res.json({ message: 'UPDATE a post' })
})

module.exports = router