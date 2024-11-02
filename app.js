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
app.get('/sobremi', (req, res) => {
    res.render('sobremi', {
        titulo: 'Sobre Mí',
        navbart:'BENITEZ',
    });
});

app.get('/formacion', (req, res) => {
    res.render('formacion', {
        titulo: 'Formación Académica',
        navbart:'BENITEZ',
    });
});

app.get('/proyectos', (req, res) => {
    res.render('proyectos', {
        titulo: 'Proyectos',
        navbart:'BENITEZ',
    });
});

app.get('/contactos', (req, res) => {
    res.render('contactos', {
        titulo: 'Contacto',
        navbart:'BENITEZ',
    });
});

app.get('/1etica', (req, res) => {
    res.render('1etica', {
        titulo: 'Portafolio Ética',
        navbart:'BENITEZ',
    });
});

app.get('/2mruymruv', (req, res) => {
    res.render('2mruymruv', {
        titulo: 'MRU Y MRUV',
        navbart:'BENITEZ',
    });
});

app.get('/3complidor', (req, res) => {
    res.render('3complidor', {
        titulo: 'PROYECTO COMPILADOR',
        navbart:'BENITEZ',
    });
});

app.get('/4abarroteria', (req, res) => {
    res.render('4abarroteria', {
        titulo: 'PROYECTO ABORROTERIA',
        navbart:'BENITEZ',
    });
});

app.get('/5recursos', (req, res) => {
    res.render('5recursos', {
        titulo: 'PROYECTO RECURSOS',
        navbart:'BENITEZ',
    });
});

app.get('/6resgistro', (req, res) => {
    res.render('6resgistro', {
        titulo: 'PROYECTO REGISTRO',
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