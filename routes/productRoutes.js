//import express from 'express'; 
//import {database} from '../db/db.js';
const express = require('express'); 
const {obtenerProductos, crearProductos, updateProducto, verProducto, deleteProdcutos} = require('../controller/controllerProduct'); 
//const db = require('../db/db');  
const multer = require('multer');

// Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("FILE: ", file)
        cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage });

const router = express.Router();

/* mostrar todos los productos */
router.get('/api/productos', obtenerProductos);

/* actualizar productos */
router.post('/api/productos/:id', upload.single('imagen'), updateProducto); 

/* crear un producto y actualizar */ 
router.post('/api/productos', upload.single('imagen'), crearProductos);

/* ver un producto */
router.get('/api/productos/:id', verProducto); 

router.get('/api/productos/delete/:id', deleteProdcutos); 

module.exports = router; 
