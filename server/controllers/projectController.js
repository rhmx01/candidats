const asyncHandler = require('express-async-handler')

const Project = require('../models/projectModel')

// @desc    Get projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
    try {
        //  Query the database for a list of all results
        const result = await Project.find().populate();

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully found all projects',
            });
        } else {
            return res.status(203).json({
                success: true,
                result: [],
                message: 'Collection is Empty',
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            result: [],
            message: error.message,
            error: error,
        });
    }
})

// @desc    Add project
// @route   POST /api/projects
// @access  Public
const addProject= asyncHandler(async (req, res) => {
    try {
        // Creating a new project in the collection
        const result = await Project.create(req.body)
        // Returning successfull response
        return res.status(200).json({
            success: true,
            result,
            message: 'Successfully Created',
        });
    } catch (error) {
        // If error is thrown by Mongoose due to required validations
        if (error.name == 'ValidationError') {
            return res.status(400).json({
                success: false,
                result: null,
                message: 'Required fields are not supplied',
                error: error,
            });
        } else {
            // Server Error
            return res.status(500).json({
                success: false,
                result: null,
                message: error.message,
                error: error,
            });
        }
    }
})

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Public
const updateProject = asyncHandler(async (req, res) => {
    try {
        // Find project by id and updates with the required fields
        const result = await Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true, // return the new result instead of the old one
            runValidators: true,
        }).exec();
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No project found by this id: ' + req.params.id,
            });
        } else {
            return res.status(200).json({
                success: true,
                result,
                message: 'we update this project by this id: ' + req.params.id,
            });
        }
    } catch (error) {
        // If error is thrown by Mongoose due to required validations
        if (error.name == 'ValidationError') {
            return res.status(400).json({
                success: false,
                result: null,
                message: 'Required fields are not supplied',
                error: error,
            });
        } else {
            // Server Error
            return res.status(500).json({
                success: false,
                result: null,
                message: error.message,
                error: error,
            });
        }
    }
})

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Public
const deleteProject = asyncHandler(async (req, res) => {
    try {
        // Find the project by id
        const result = await Project.findById(req.params.id)

        // If no results found, return project not found
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No project found by this id: ' + req.params.id,
            });
        } else {
            await Project.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully Deleted the project by id: ' + req.params.id,
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
        });
    }

})

module.exports = {
    getProjects,
    addProject,
    updateProject,
    deleteProject
}
