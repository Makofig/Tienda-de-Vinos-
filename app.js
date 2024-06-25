import express from 'express'; 

const {pathname: root} = new URL('./', import.meta.url); 

const app = express(); 

app.use(express.static('public')); 

/* Servidor */
const PORT = 5001;
app.listen(PORT, ()=>{
    console.log(`Server in running on port ${PORT}`); 
})