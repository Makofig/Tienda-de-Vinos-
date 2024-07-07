const express = require('express'); 
require('dotenv').config();
const jwt = require('jsonwebtoken'); 
const productRutes = require('./routes/productRoutes'); 
const userRutes = require('./routes/loginRoutes'); 
const cookieParser = require('cookie-parser'); 

const app = express(); 

/* Para acceder a la carpeta public */
app.use(express.static('public')); 
/* Para acceder a la carpeta private */
app.use('/private', express.static('private')); 
/* Permite tomar la información que lleve le formulario */
app.use(express.json());
app.use(express.urlencoded({extended: false})); 
app.use(cookieParser()); 

/* Iniciamos las rutas */
app.use('/', productRutes);
app.use('/', userRutes); 

/* Funcion de verificación de token */

const verificarToken = (req, res, next) =>{
    const secretkey = process.env.SECRET_KEY;
    const token = req.cookies.token;  
    //const token_limpio = token.split(' ')[1];  
    if (!token){
        return res.status(401).send('Acceso denegado'); 
    }
    const decoded = jwt.verify(token, secretkey);
    console.log(decoded);
    try{
        const decoded = jwt.verify(token, secretkey);
        req.user = decoded; 
        next();
            
    }catch (error){
        return res.status(400).send('Token no proveído'); 
    }
}

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

/* ruta para cerrar sesión */
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});
/* Acceder a la ruta privada */
app.get('/admin', verificarToken,  (req, res) =>{
    if (req.user.role === 'admin') {
        res.sendFile(__dirname + '/private/productos.html');
    } else {
        res.status(403).send('Acceso denegado');
    }
})

// Error 404 
app.get('*', (req, res) => {
    res.status(404).send("404 | Page not found");
});
const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`Server in running on port ${PORT}`); 
})