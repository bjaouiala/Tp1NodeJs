const express = require('express');
const app =express();
const voitureRoute = require('./voitureRouter')
app.use("/voiture",voitureRoute)
app.listen(9000, ()=>{
    console.log("server is running")
})
