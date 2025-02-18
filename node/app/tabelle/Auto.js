const { Model,DataTypes } = require("sequelize")
const sequelize = require("../config")

class Auto extends Model {}

Auto.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(20)
    },
    modello: {
        type: DataTypes.STRING(20)
    },
    fkpropietario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})