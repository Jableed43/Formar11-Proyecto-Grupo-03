const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models')
const {Op} = require ('sequelize')
const { validationResult } = require('express-validator')



module.exports = {
    // List - Product's List
    // admin: (req,res) => {
    //     // res.render('admin/admin')
    //     let products = db.Product.findAll()
    //     let categories = db.Category.findAll(
    //         {include : ['Subcategories']}
    //     )
    //     Promise.all([products, categories])

    //     
    //     .catch(err=> {
    //         console.log('Error al requerir los productos de la base de datos '+ err)
    //     })
    // },
	admin: (req, res) => {
		db.Product.findAll({
			include: [{ all: true }]
		})
			.then((products) => {
            return res.render('admin/admin', {products})
        })
	},
    // admin: (req, res) => { 
    //    return res.render('admin/admin')
    // },
    // Create - Form to create a product
	create: (req, res) => {
        {
            let categories = db.Category.findAll()
            let subcategories = db.Subcategory.findAll()
    
                Promise.all([categories, subcategories])
                .then(([categories, subcategories]) => {
                    return res.render('admin/createProduct', {
                        categories,
                        subcategories,
                
                        
                    })
                })
                .catch(error => console.log(error))
            }
		
	},
    // Create -  Method to store
    store: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
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

        db.Product.create ({
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
            subcategoryId: subcategory
        })
        .then(() =>{
            res.redirect(`/products/detail/${product.id}`)
        })
        .catch(err=> {
            res.send(error)
        })
    } else {
        errors = errors.mapped()
        
        let categories = db.Category.findAll()
        let subcategories = db.Subcategory.findAll()

            Promise.all([categories, subcategories])
            .then(([categories, subcategories]) => {
                return res.render('admin/createProduct', {
                    categories,
                    subcategories,
                    errors,
                    old: req.body
                })
            })
            .catch(error => console.log(error))
        }
    },
    // Update - Form to edit
    edit: (req, res) => {

        db.Product.findByPk(req.params.id)
            .then((product) => {
                res.render("admin/editproduct", {
                    product
                })
            })
            .catch((error) => {
                res.send(error)
            })

    },
    // Update - Method to update
    update: (req, res, next) => {
        
        const { title, description, price, calories, total_fat, carb, protein, transfat, saturatedfat, cholesterol, sodium, sugars, fiber, subcategory } = req.body;

        let img = req.files[0] ? req.files[0].filename : undefined;

        db.Product.update({
            title,
            price,
            description,
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
            subcategoryId: subcategory
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {
                res.redirect(`/products/detail/$(req.params.id)`)
            })
            .catch((error) => {
                res.send(error)
            })
    },
    // Delete - Delete one product from DB
	destroy: (req, res) => {

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                return res.redirect('/admin')
            })
            .catch((error) => {
                res.send(error)
            })
    }
}