const { Model,DataTypes } = require("sequelize")
const sequelize = require("../config")

class Propietari extends Model {}

Propietari.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(20)
    },
    cognome: {
        type: DataTypes.STRING(20)
    }
})