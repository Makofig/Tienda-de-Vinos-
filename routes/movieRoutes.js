//import express from 'express'; 
//import {database} from '../db/db.js';
const express = require('express'); 
const db = require('../db/db');  

const router = express.Router();

router.get('/', (req, res) =>{
    const sql = "SELECT * FROM movies"; 
    db.query(sql, (err, result) =>{
        if (err) throw err; 
        res.json(result); 
    });
});

module.exports = router; 
