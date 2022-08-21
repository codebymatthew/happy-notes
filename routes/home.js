const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')


router.get('/', homeController.getNotes) 

router.post('/submit-note', homeController.submitNote)

router.delete('/delete-note', homeController.deleteNote) 

module.exports = router