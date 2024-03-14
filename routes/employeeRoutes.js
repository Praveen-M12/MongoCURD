const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

// Create
router.post('/employees', employeeController.createEmployee);

// Read
router.get('/employees', employeeController.getAllEmployees);

// Update
router.put('/employees/:id', employeeController.updateEmployee);

// Delete
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
