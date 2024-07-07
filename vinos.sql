/* DATABASE DEL PROYECTO DE VINOS */

CREATE DATABASE IF NOT EXISTS `vinos` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci; 
USE vinos ;

CREATE TABLE usuarios(
id int(255) auto_increment not null, 
nombre varchar(100) not null,
email varchar(200) not null, 
password varchar(200) not null, 
rol varchar(100), 
CONSTRAINT pk_usuarios PRIMARY KEY(id), 
CONSTRAINT uq_email UNIQUE(email)
)ENGINE=InnoDb CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE categorias(
    id int(255) auto_increment not null, 
    titulo varchar(100) not null,
    descripcion text, 
    CONSTRAINT pk_categorias PRIMARY KEY(id)
)ENGINE=InnoDb DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci; 

CREATE TABLE productos(
    id int(255) auto_increment not null, 
    id_categoria int(255) not null, 
    nombre varchar(100) not null, 
    precion float(200,2), 
    descripcion varchar(255), 
    stock int, 
    imagen varchar(200),
    CONSTRAINT pk_productos PRIMARY KEY(id),
    CONSTRAINT fk_productos_categorias FOREIGN KEY (id_categoria) REFERENCES categorias(id)
)ENGINE=InnoDb DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;