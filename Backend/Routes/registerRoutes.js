const express = require('express');
const { createRegistration, getAllRegistrations, getRegistrationById, updateRegistration, deleteRegistration } = require('../Controllers/registerControler.js');

const router = express.Router();


router.post('/', createRegistration);
router.get('/', getAllRegistrations);
router.get('/:id', getRegistrationById);
router.put('/:id', updateRegistration);
router.delete('/:id', deleteRegistration);

module.exports = router;