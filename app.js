const express = require('express')
const hbs = require('hbs')
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials')

//app.use(express.static('public'));
// Usa la ruta absoluta para mayor seguridad
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('public_html'))

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'BEN',
        hola: 'Hola soy Benitez',
        umg: 'Estudiante UMG',
        titulo: 'BEN',
        navbart:'BENITEZ',
        profesion: 'INGENIERIA',
    })
})
app.get('/diesel', (req, res) => {
    res.render('diesel', {
        titulo: 'Sobre Mí',
        navbart:'BENITEZ',
    });
});

app.get('/electricos', (req, res) => {
    res.render('electricos', {
        titulo: 'Formación Académica',
        navbart:'BENITEZ',
    });
});

app.get('/gasolina', (req, res) => {
    res.render('gasolina', {
        titulo: 'Proyectos',
        navbart:'BENITEZ',
    });
});

app.get("*", (req, res) => {
    res.render("404", {
    titulo: "Error 404 - Página No Encontrada",
    });
});

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})