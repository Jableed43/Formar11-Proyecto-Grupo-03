const db = require('../database/models/index')
const {Op} = require ('sequelize')
const { validationResult } = require('express-validator')


module.exports = {
    list: (req,res) => {
        db.products.findAll()
        .then(productos => {
            res.render('admin', {products : productos})
        })
        .catch(err=> {
            console.log('Error al requerir los productos de la base de datos '+ err)
        })
    },
    store: (req,res) => {
        let errors = validationResult(req);
                // Para validar la imagen
        if (req.fileValidationError) {
            let images = {
                param: "images",
                msj: "Solo se permiten imágenes"
            }
            errors.errors.push(images)
        }
        const { title, description, price, calories, total_fat, carb, protein, transfat, saturatedfat, cholesterol, sodium, sugars, fiber, subcategory} = req.body

        let images = req.file ? req.file.filename : 'default-img.jpg';

        db.product.create ({
            title,
            description,
            price,
            calories,
            total_fat,
            carb,
            protein,
            transfat, 
            saturatedfat, 
            cholesterol, 
            sodium,
            sugars,
            fiber,
            img : images,
            Id_subcategory: subcategory
        })
        .then(() =>{
            res.redirect(`/products/detail/${product.id}`)
        })
        .catch(err=> {
            res.send(error)
        })
    }
    
}