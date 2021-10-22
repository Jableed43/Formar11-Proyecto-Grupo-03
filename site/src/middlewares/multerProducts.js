const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'./public/images/products')
    },
    filename : (req,file,callback) => {
        callback(null,'img-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
});

module.exports = upload;
