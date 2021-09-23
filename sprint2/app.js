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

/* app get login */
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))

/* app get register */
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views','register.html')))

/* app get contact-form */
app.get('/contacto', (req, res) => res.sendFile(path.join(__dirname, 'views','contacto.html')))

/* app get carga-productos */
app.get('/carga-productos', (req, res) => res.sendFile(path.join(__dirname, 'views','carga-productos.html')))

/* app get footer */
app.get('/footer', (req, res) => res.sendFile(path.join(__dirname, 'views','footer.html')))

/* app get header */
app.get('/header', (req, res) => res.sendFile(path.join(__dirname, 'views','header.html')))

/* app get carrito */
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, 'views','carrito.html')))



/* Servidor escuchando, siempre va al final */
app.listen(port, () => console.log("Server corriendo en http://localhost:"+port))
