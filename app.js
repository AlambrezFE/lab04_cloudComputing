const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// Datos de ejemplo para las vistas
const clientes = [
    { nombre: 'Enrique segoviano', id: 1 },
    { nombre: 'YeCe Champi', id: 2 },
    { nombre: 'Hito Matico', id: 3 }
];

const productos = [
    { nombre: 'Brea en tinta', id: 1 },
    { nombre: 'Motzarela fermentada', id: 2 },
    { nombre: 'Tomates a la curry', id: 3 }
];

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/clientes', (req, res) => {
    res.render('clientes', { clientes: clientes });
});

app.get('/productos', (req, res) => {
    res.render('productos', { productos: productos });
});

app.set('views', path.join(__dirname, '.'));


app.listen(5000, () => {
    console.log('Aplicación corriendo en http://localhost:9000');
});
