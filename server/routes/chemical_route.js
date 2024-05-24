const express = require('express');
const { getChemicals, getChemicalsById, createChemicals, updateChemicals, deleteChemicals, createChemicalsCsv } = require('../controller/chemical_controller.js');

const router = express.Router();

router.get('/getChemicals', getChemicals);
router.get('/getChemicalsById/:id', getChemicalsById);
router.post('/createChemicals', createChemicals);
router.post('/createChemicalsCsv', createChemicalsCsv);
router.put('/updateChemicals/:id', updateChemicals);
router.delete('/deleteChemicals/:id', deleteChemicals);

module.exports = router;
