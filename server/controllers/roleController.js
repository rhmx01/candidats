const asyncHandler = require('express-async-handler')

const Role = require('../models/roleModel')

// @desc    Get roles
// @route   GET /api/roles
// @access  Public
const getRoles = asyncHandler(async (req, res) => {
    try {
        //  Query the database for a list of all results
        const result = await Role.find().populate();

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully found all roles',
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

// @desc    Add role
// @route   POST /api/roles
// @access  Public
const addRole= asyncHandler(async (req, res) => {
    try {
        // Creating a new role in the collection
        const result = await Role.create(req.body)
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

// @desc    Update role
// @route   PUT /api/roles/:id
// @access  Public
const updateRole = asyncHandler(async (req, res) => {
    try {
        // Find role by id and updates with the required fields
        const result = await Role.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true, // return the new result instead of the old one
            runValidators: true,
        }).exec();
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No role found by this id: ' + req.params.id,
            });
        } else {
            return res.status(200).json({
                success: true,
                result,
                message: 'we update this role by this id: ' + req.params.id,
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

// @desc    Delete role
// @route   DELETE /api/roles/:id
// @access  Public
const deleteRole = asyncHandler(async (req, res) => {
    try {
        // Find the role by id
        const result = await Role.findById(req.params.id)

        // If no results found, return role not found
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No role found by this id: ' + req.params.id,
            });
        } else {
            await Role.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully Deleted the role by id: ' + req.params.id,
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
    getRoles,
    addRole,
    updateRole,
    deleteRole
}
