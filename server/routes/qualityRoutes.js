const express = require('express')
const router = express.Router()
const {
    getQualities,
    addQuality,
    updateQuality,
    deleteQuality
} = require('../controllers/qualityController')

router.route('/').get(getQualities).post(addQuality)
router.route('/:id').delete(deleteQuality).put(updateQuality)

module.exports = router