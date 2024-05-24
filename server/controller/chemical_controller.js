const csv = require('csvtojson')
const csvPath = "./utils/chemical_data.csv";
const { createChemical, createChemicalCsv, findChemicalsById, findAllChemicals, updateChemical, deleteChemical, } = require('../repository/chemical_repository.js')

const getChemicals = async (req, res, next) => {
    try {
        const chemical = await findAllChemicals()
        res
            .status(200)
            .json(chemical)
    }
    catch (err) {
        console.log(err)
    }
}
const getChemicalsById = async (req, res, next) => {
    try {
        const chemical = await findChemicalsById(req.params.id)
        res
            .status(200)
            .json(chemical)
    }
    catch (err) {
        console.log(err)
    }
}

const createChemicals = async (req, res, next) => {
    try {
        const chemical = await createChemical(req.body);
        res
            .status(200)
            .json(chemical)
    }
    catch (err) {
        console.log(err)
    }
}
const createChemicalsCsv = async (req, res, next) => {
    try {
        const chemicals = [];
        const chemicalsToBeInserted = await csv().fromFile(csvPath);
        console.log(chemicalsToBeInserted);
        for(let i = 0 ; i<chemicalsToBeInserted.length; i++){
            const {CompoundName: chemical_name, CompoundDescription:chemical_description, strImageSource: chemical_image, strImageAttribution: chemical_image_attribution} = chemicalsToBeInserted[i];
            chemicals.push({chemical_name, chemical_description, chemical_image, chemical_image_attribution});
            console.log(chemicals);
        }
        const insertedChemicals = await createChemicalCsv(chemicals);
        return insertedChemicals;

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateChemicals = async (req, res, next) => {
    try {
        const chemical = await updateChemical(req.params.id, req.body)
        res
            .status(200)
            .json(chemical)
    }
    catch (err) {
        console.log(err)
    }
}

const deleteChemicals = async (req, res, next) => {
    try {
        await deleteChemical(req.params.id)
        res
            .status(200)
            .json(`Chemical has been deleted successfully!`)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    getChemicals,
    getChemicalsById,
    createChemicals,
    createChemicalsCsv,
    updateChemicals,
    deleteChemicals,
}