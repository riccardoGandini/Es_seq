const { Model,DataTypes } = require("sequelize")
const sequelize = require("../config")

class ModelliAuto extends Model {}

ModelliAuto.init({
    id: {
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    modello: {
        type: DataTypes.STRING(20)
    }
})

module.exports = ModelliAuto