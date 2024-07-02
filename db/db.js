const {createPool} = require('mysql2/promise'); 
require('dotenv').config();
/*
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});  

connection.connect((err) =>{
    if(err){
        console.error('Error connecting to the database:', err); 
        return; 
    }
    console.log('Connected to the database.');
});
*/
const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT, 
    waitForConnections: true,
    connectionLimit: 5
});

pool.getConnection()
.then(connection => {
    pool.releaseConnection(connection);
    console.log('Base de datos conectada');
})
.catch(err => {
    console.error('Hubo un error al conectarse a la DB:', err);
});

module.exports = pool; 