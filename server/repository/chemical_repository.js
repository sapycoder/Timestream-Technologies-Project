const {Chemical} = require('../models/Chemical.js');
const db = require('../models/index.js')
console.log(db);
const ChemicalMasterRepo = db.Chemical;

const createChemical = async (params) => {
    try {
        const chemical = await ChemicalMasterRepo.create(params);
        return chemical;
    } catch (error) {
        console.error("Error creating chemical:", error);
        throw error; 
    }
};
const createChemicalCsv = async (params) => {
    try {
        const chemical = await ChemicalMasterRepo.bulkCreate(params);
        return chemical;
    } catch (error) {
        console.error("Error creating chemical through csv:", error);
        throw error; 
    }
};

const findChemicalsById = async(id) => {
    const chemical = await ChemicalMasterRepo.findOne({
        where: {
            chemical_id: id
        }
    })
    return chemical;
}

 const findAllChemicals = async() => {
    const chemical = await ChemicalMasterRepo.findAll()
    return chemical;
}

 const updateChemical = async(id, chemical) => {
    const updatedChemical = await ChemicalMasterRepo.update(chemical, {
        where: {
            chemical_id: id
        }
    })
    return updatedChemical;
}

 const deleteChemical = async(id) => {
    await ChemicalMasterRepo.destroy({
        where: {
            chemical_id: id
        }
    });
}

module.exports = {
    createChemical,
    createChemicalCsv,
    findChemicalsById,
    findAllChemicals,
    updateChemical,
    deleteChemical,
}
