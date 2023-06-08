const express = require('express')
const { createEntry, getEntries, getEntry, deleteEntry, updateEntry } = require('../controllers/entryControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// ensures user is authorized to make the requests below
router.use(requireAuth)
// GET all entries
router.get('/', getEntries)
// GET an entry
router.get('/:id', getEntry)
// Create an entry
router.post('/', createEntry)
// DELETE an entry
router.delete('/:id', deleteEntry)
// UPDATE an entry
router.patch('/:id', updateEntry)

module.exports = router