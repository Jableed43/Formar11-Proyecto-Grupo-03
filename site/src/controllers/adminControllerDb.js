// const fs = require('fs');
// const path = require('path');
// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    // Create - Form to create a product
	create: (req, res) => {
        {
            let categories = db.Category.findAll()
            let subcategories = db.Subcategory.findAll()
    
                Promise.all([categories, subcategories])
                .then(([categories, subcategories]) => {
                    return res.render('admin/createProduct', {
                        categories,
                        subcategories                       
                    })
                })
                .catch(error => console.log(error))
            }
		
	},
    // Create -  Method to store
    store: (req,res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){
        
        const { title , description, price, calories, totalfat, carb, protein, transfat, saturatedfat, cholesterol, sodium, sugars, fiber, subcategory, category} = req.body;
        // let images = req.file ? req.file.filename : 'default-img.jpg';
        
        db.Product.create ({
            title : title,            
            description,
            price,
            calories,
            totalfat,
            carb,
            protein,
            transfat, 
            saturatedfat, 
            cholesterol, 
            sodium,
            sugars,
            fiber,
            images: req.file ? req.file.filename : 'default-img.jpg',
            subcategoryId: subcategory,
            categoryId: category
        })
        .then(() =>{
            // res.redirect(`/products/detail/${product.id}`)     
            res.redirect('/')             
        })
        .catch(error => {
            res.send(error)
        })

    } else {
        errors = errors.mapped()

                // Para validar la imagen
        if (req.fileValidationError) {
            let images = {
                param: "images",
                msg: "Solo se permiten imágenes"
            }
            errors.errors.push(images)          
        }
        
        let product = db.Product.findByPk(req.params.id)
        let categories = db.Category.findAll()
        let subcategories = db.Subcategory.findAll()

            Promise.all([product, categories, subcategories])
            .then(([product, categories, subcategories]) => {
                return res.render('admin/createProduct', {
                    product,
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

        let product = db.Product.findByPk(req.params.id,
            {
                include: ['subcategories']
            })
        let categories = db.Category.findAll()
        let subcategories = db.Subcategory.findAll()
    
        
        Promise.all([product, categories, subcategories])
        .then(([product, categories, subcategories]) => {
                res.render('admin/editProduct', {
                    product,
                    categories,
                    subcategories
                })
            })
            .catch((error) => {
                res.send(error)
            })

    },
    // Update - Method to update
    update: (req, res, next) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){
        
        const { title, description, price, calories, total_fat, carb, protein, transfat, saturatedfat, cholesterol, sodium, sugars, fiber, subcategory } = req.body;

        // let img = req.files ? req.files.filename : undefined;

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
            image: req.file ? req.file.filename : undefined,
            subcategoryId: subcategory
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {
                console.log(result);
                res.redirect('/admin')
                // res.redirect('/')
            })
            .catch((error) => {
                res.send(error)
            })
        } else {
            errors = errors.mapped()
    
                    // Para validar la imagen
            if (req.fileValidationError) {
                let images = {
                    param: "images",
                    msg: "Solo se permiten imágenes"
                }
                errors.errors.push(images)          
            }
            
            let product = db.Product.findByPk(req.params.id)
            let categories = db.Category.findAll()
            let subcategories = db.Subcategory.findAll()
    
                Promise.all([product, categories, subcategories])
                .then(([product, categories, subcategories]) => {
                    return res.render('admin/editProduct', {
                        product, 
                        categories,
                        subcategories,
                        errors,
                        old: req.body
                    })
                })
                .catch(error => console.log(error))
            }
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
    },
    userlist: (req, res) => {
		db.User.findAll({
			include: [{ all: true }]
		})
			.then((users) => {
            return res.render('admin/userlist', {users})
        })
	},
}