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


module.exports = subir