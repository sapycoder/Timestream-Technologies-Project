
module.exports = (sequelize, DataTypes) => {
    const Chemical = sequelize.define("Chemical", {
        chemical_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        chemical_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        chemical_image: {
            type: DataTypes.STRING,
        },
        chemical_image_attribution: {
            type: DataTypes.STRING,
        },
        chemical_description: {
            type: DataTypes.STRING,
        },
    })

    return Chemical;
}
