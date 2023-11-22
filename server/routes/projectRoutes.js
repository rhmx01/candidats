const express = require('express')
const router = express.Router()
const {
    getProjects,
    addProject,
    updateProject,
    deleteProject
} = require('../controllers/projectController')

router.route('/').get(getProjects).post(addProject)
router.route('/:id').delete(deleteProject).put(updateProject)

module.exports = router