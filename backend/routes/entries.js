const express = require('express')
const { createEntry, getEntries, getEntry } = require('../controllers/entryControllers')

const router = express.Router()

router.get('/', getEntries)

router.get('/:id', getEntry)

router.post('/', createEntry)

router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a post'})
})

router.patch('/:id', (req, res) => {
    res.json({ message: 'UPDATE a post' })
})

module.exports = router