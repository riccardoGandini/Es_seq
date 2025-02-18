
const { Op } = require('sequelize')
const db = require('./tabelle/Associazioni')
const express = require('express');
const bodyparser = require('parse-json');
const { where } = require('./config');
const app = express();

app.use(express.json())


db.sequelize.authenticate().then(() =>{
    console.log("connessione con il database stabilita")
}).catch((err)=>{
    console.log("errore nella connessione con il database",err)
})

db.sequelize.sync().then(()=>{
    console.log("tabelle sincronizzate con successo");
}).catch((err)=>{
    console.log("errore nella sincronizzazione delle tabelle", err);
});


// mostarere tutte le auto dato un modello
app.get('/Auto/:modello', async(req)=>{
    const modello = req.params.modello

    res.json(await db.tabelle.Auto.findAll({
        where: db.sequelize.where(db.sequelize.fn("modello", db.sequelize.col("modello")),{[Op.eq]:modello})
        
    }));
})

//trovare tutte le macchine di una persona partendo da un nome e cognome

app.get("/Propietari/:nome/:cognome", async (req,res)=>{
    try{
        const nomeP = req.params.nome
        const cognomeP = req.params.cognome

        const id = await db.sequelize.Propietari.findAll({
            where: {
                nome: {
                    [Op.eq]:nomeP
                },

                cognome:{
                    [Op.eq]:cognomeP
                }

            }
        })

        res.json(await getAutoProp(id))
    }catch(error){

    }
})

async function getAutoProp(idProp) {
    return db.sequelize.Propietari.findAll({
        include:{
            model: db.tabelle.Auto, 
            where: { fkpropietario : idProp },
            attributes:[]
        }
    })
}