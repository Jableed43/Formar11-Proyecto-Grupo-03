const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./public/images/imgmenu')
    },
    filename: function (req, file, cb) {
      cb(null,'img-' + Date.now() + path.extname(file.originalname))
    }
  })


const fileFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
    req.fileValidationError = "Solo se permiten imágenes";
    return cb(null, false, req.fileValidationError);
  } else {}
  cb(null, true);
}


const upload = multer ({ storage, fileFilter })


module.exports = upload;
