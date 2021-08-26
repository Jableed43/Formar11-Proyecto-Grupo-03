const express = require('express')
const app = express()
const path = require('path')
const port = 3030

/* Middleware, establecer ruta estatica para requerir archivos */
app.use(express.static('public'))

/* PAGINAS */

/* app get Home */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))

/* app get detalle-producto */
app.get('/detalle-producto', (req, res) => res.sendFile(path.join(__dirname, 'views', 'detalle-producto.html')))

/* app get detalle-producto */
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))

/* app get detalle-producto */
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))


/* Servidor escuchando, siempre va al final */
app.listen(port, () => console.log("Server corriendo en http://localhost:"+port))
