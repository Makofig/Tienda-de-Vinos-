//import express from 'express'; 
//import env from 'dotenv/config'; 
//import {rutas} from './routes/movieRoutes.js'; 
const express = require('express'); 
require('dotenv').config();
const movieRutes = require('./routes/movieRoutes'); 
//const {pathname: root} = new URL('./', import.meta.url); 

const app = express(); 

app.use(express.static('public')); 
app.use(express.json());
app.use('/movies', movieRutes);
/* Servidor */
const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`Server in running on port ${PORT}`); 
    console.log(process.env.DB_HOST, process.env.DB_USER);
})