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
    fkmodello: {
        type: DataTypes.SMALLINT,
    },
    fkpropietario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Auto