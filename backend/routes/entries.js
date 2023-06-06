const express = require('express')
const { createEntry, getEntries, getEntry, deleteEntry, updateEntry } = require('../controllers/entryControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// ensures user is authorized to make the requests below
router.use(requireAuth)

router.get('/', getEntries)

router.get('/:id', getEntry)

router.post('/', createEntry)

router.delete('/:id', deleteEntry)

router.patch('/:id', updateEntry)

module.exports = router