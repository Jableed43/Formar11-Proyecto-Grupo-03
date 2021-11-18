const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const { fileFilter } = require('../middlewares/multer')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
    // Acceder a admin
    admin: (req, res, next) => {
        res.render('admin/admin');
    },
    // Create - Form to create
    create: (req, res) => {
        res.render('admin/createProduct')
    },
    // Create -  Method to store
    store: (req, res, next) => {
        let errors = validationResult(req);

        // Para validar la imagen
        if (req.fileValidationError) {
            let images = {
                param: "images",
                msj: "Solo se permiten imágenes"
            }
            errors.errors.push(images)
        }
        if (!errors.isEmpty()) {
            res.render('admin/createProduct',
                {
                    errors: errors.mapped(),
                    old: req.body
                })
        } else {
            let product = req.body
            product.id = products[products.length - 1].id + 1;
            product.images = req.file ? req.file.filename : 'default-img.jpg'
            products.push(product)
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
            res.redirect(`/products/detail/${product.id}`)
         }

    },
    // Update - Form to edit
    edit: (req, res) => {
        let productEdit = products.find(e => e.id === +req.params.id)
        res.render('admin/editProduct', { productEdit })
    },
    // Update - Method to update
    update: (req, res) => {
        let productUpdate = products.find(product => product.id === +req.params.id)
        const { title, price, category, subcategory, description, calories, totalfat, carb, protein, transfat, saturatedfat, cholesterol, sodium, sugars, fiber } = req.body
        if (productUpdate) {
            productUpdate.title = title
            productUpdate.price = +price
            productUpdate.description = description
            productUpdate.subcategory = subcategory
            productUpdate.category = category
            productUpdate.calories = calories
            productUpdate.totalfat = totalfat
            productUpdate.carb = carb
            productUpdate.protein = protein
            productUpdate.transfat = transfat
            productUpdate.saturatedfat = saturatedfat
            productUpdate.cholesterol = cholesterol
            productUpdate.sodium = sodium
            productUpdate.sugars = sugars
            productUpdate.fiber = fiber
            productUpdate.img = req.file ? req.file.filename : null

            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))

            res.redirect(`/products/detail/$(req.params.id)`)
        } else {
            res.redirect('/')
        }
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        products = products.filter(product => product.id === +req.params.id)

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))

        res.redirect('/')
    }
}

module.exports = controller