const express = require('express'); 
require('dotenv').config();
const productRutes = require('./routes/productRoutes'); 


const app = express(); 

/* Para acceder a la carpeta public */
app.use(express.static('public')); 
/* Permite tomar la información que lleve le formulario */
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.use('/', productRutes);
/* Servidor */
app.get('/productos', (req, res) => {
    res.sendFile(__dirname + "/public/productos.html"); 
})
app.get('/create', (req, res) => {
    res.sendFile(__dirname + "/public/crear.html");
})
app.get('/update', (req, res) => {
    res.sendFile(__dirname + "/public/update.html");
    //res.send('Editar producto');  
})
app.get('/delete', (req, res) => {
    res.sendFile(__dirname + "/public/delete.html");
    //res.send('Editar producto');  
})

// Error 404 
app.get('*', (req, res) => {
    res.status(404).send("404 | Page not found");
});
const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`Server in running on port ${PORT}`); 
    console.log(process.env.DB_HOST, process.env.DB_USER);
})