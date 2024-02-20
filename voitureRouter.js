const express = require('express');
const route = express.Router();


let voiture = [{ id: 1, name: "clio" }, { id: 2, name: "megane" }, { id: 3, name: "range" }];

route.use(express.json());
//lister tout les voiture
route.get("/", (req, res) => {
  res.json(voiture);
});


//ajouter une voiture
route.post('/addVoiture', (req, res) => {
  let Rvoiture = req.body;
  console.log(Rvoiture)
  voiture.push(Rvoiture);
  res.json(Rvoiture);
});


//get voiture by id
route.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const voitur = voiture.find(v => v.id == id);
    if(voitur){
        res.json(voitur)
    }else res.status(404).json(" not found ")

})



//modifier voiture
route.put('/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let index = voiture.findIndex(v => v.id === id);
    if (index !== -1){
        voiture[index] = req.body;
        res.json(voiture[index]);
    } else res.status(404).json("not found" );

})


//supprimer voiture
route.delete("/:id",(req,res)=>{
    let id = parseInt(req.params.id);
    let index = voiture.findIndex(v => v.id === id);
    if (index !== -1){
        delete voiture[index];
        res.json(" voiture supprimer ") 
    }else res.status(404).json(" not found") 
  
})


module.exports = route;