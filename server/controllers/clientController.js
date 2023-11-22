const asyncHandler = require('express-async-handler')

const Client = require('../models/clientModel')

// @desc    Get clients
// @route   GET /api/clients
// @access  Public
const getClients = asyncHandler(async (req, res) => {
    try {
        //  Query the database for a list of all results
        const result = await Client.find().populate();

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully found all clients',
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

// @desc    Add client
// @route   POST /api/clients
// @access  Public
const addClient= asyncHandler(async (req, res) => {
    try {
        // Creating a new client in the collection
        const result = await Client.create(req.body)
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

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Public
const updateClient = asyncHandler(async (req, res) => {
    try {
        // Find client by id and updates with the required fields
        const result = await Client.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true, // return the new result instead of the old one
            runValidators: true,
        }).exec();
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No client found by this id: ' + req.params.id,
            });
        } else {
            return res.status(200).json({
                success: true,
                result,
                message: 'we update this client by this id: ' + req.params.id,
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

// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Public
const deleteClient = asyncHandler(async (req, res) => {
    try {
        // Find the client by id
        const result = await Client.findById(req.params.id)

        // If no results found, return client not found
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No client found by this id: ' + req.params.id,
            });
        } else {
            await Client.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                success: true,
                result,
                message: 'Successfully Deleted the client by id: ' + req.params.id,
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
    getClients,
    addClient,
    updateClient,
    deleteClient
}
