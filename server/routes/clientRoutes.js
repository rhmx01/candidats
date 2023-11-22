const express = require('express')
const router = express.Router()
const {
    getClients,
    addClient,
    updateClient,
    deleteClient
} = require('../controllers/clientController')

router.route('/').get(getClients).post(addClient)
router.route('/:id').delete(deleteClient).put(updateClient)

module.exports = router