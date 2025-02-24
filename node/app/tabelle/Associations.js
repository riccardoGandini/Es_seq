const sequelize = require('../config');

//gli passo per i require l'istanza di sequelize
//gli consente di collegarsi col db
const Auto = require('./Auto');
const Propietari = require('./Propietari');
const ModelliAuto = require('./ModelliAuto');

//un aeroporto ha molti voli di partenza e di inizio
//per sequelize vuol dire associazione molti a uno 
//la fk si troverà su volo
Propietari.hasMany(Auto, { foreignKey: 'fkpropietario' });
ModelliAuto.hasMany(Auto, { foreignKey: 'fkmodello' });
Auto.belongsTo(Propietari, { foreignKey: 'fkpropietario' });
Auto.belongsTo(ModelliAuto, { foreignKey: 'fkmodello' });

const db = {
  sequelize,
  tabelle: {
      Propietari,
      Auto,
      ModelliAuto
  }
}

module.exports = db;