const express = require('express')
const router = express.Router()
const {
    getRoles,
    addRole,
    updateRole,
    deleteRole
} = require('../controllers/roleController')

router.route('/').get(getRoles).post(addRole)
router.route('/:id').delete(deleteRole).put(updateRole)

module.exports = router