const asyncHandler = require('express-async-handler')

const Quality = require('../models/qualityModel')

// @desc    Get qualities
// @route   GET /api/qualities
// @access  Public
const getQualities = asyncHandler(async (req, res) => {
    try {
        //  Query the database for a list of all results
        const result = await Quality.find().populate();

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully found all qualities',
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

// @desc    Add quality
// @route   POST /api/qualities
// @access  Public
const addQuality= asyncHandler(async (req, res) => {
    try {
        // Creating a new quality in the collection
        const result = await Quality.create(req.body)
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

// @desc    Update quality
// @route   PUT /api/qualities/:id
// @access  Public
const updateQuality = asyncHandler(async (req, res) => {
    try {
        // Find quality by id and updates with the required fields
        const result = await Quality.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true, // return the new result instead of the old one
            runValidators: true,
        }).exec();
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No quality found by this id: ' + req.params.id,
            });
        } else {
            return res.status(200).json({
                success: true,
                result,
                message: 'we update this quality by this id: ' + req.params.id,
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

// @desc    Delete quality
// @route   DELETE /api/qualities/:id
// @access  Public
const deleteQuality = asyncHandler(async (req, res) => {
    try {
        // Find the quality by id
        const result = await Quality.findById(req.params.id)

        // If no results found, return quality not found
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No quality found by this id: ' + req.params.id,
            });
        } else {
            await Quality.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully Deleted the quality by id: ' + req.params.id,
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
    getQualities,
    addQuality,
    updateQuality,
    deleteQuality
}
