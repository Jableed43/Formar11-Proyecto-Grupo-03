var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')
const multer = require('multer');
const upload = multer({dest:'../public/images/users'})
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  
const subir = multer({ storage: storage })


/* POST login */
router.get('/login', usersControllers.login);
router.post('/login', usersControllers.login);

/* POST register */
router.get('/register', usersControllers.register);
router.post('/register',subir.single('img'), usersControllers.newUser);

/* GET carrito */
router.get('/carrito', usersControllers.carrito);

/* GET perfil */
router.get('/user/:id', usersControllers.perfil);

/* PUT editar */
router.get('/edit/:id', usersControllers.edit);
router.put('/edit/:id', usersControllers.update);

/* DELETE user */ 
router.delete('/delete/:id', usersControllers.destroy); 

module.exports = router;


