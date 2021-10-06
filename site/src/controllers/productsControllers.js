const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    // Root - Show all products
	index: (req, res) => {
		res.render('products', {products})
	},

    detalle:(req, res, next) => {
        const {id} = req.params
		const productDetail = products.find(e => e.id === +id)
        res.render('products/detalle-producto', {productDetail})
    },
    // Create - Form to create
	create: (req, res) => {
		res.render('create')
	},
    // Create -  Method to store
	store: (req, res) => {
        const object = req.body
		object.id = products.length
		products.push(products)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
		res.redirect('/products/detail/${product.id}')
	},
    // Update - Form to edit
	edit: (req, res) => {
		products.find(e => e.id === req.params.id)
		res.render('edit', {products})
	},
	

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		products = products.filter(product => product.id === +req.params.id)

		fs.writeFileSync(productsFilePath, JSON.stringify(products))

        res.redirect('/')
	}

}



module.exports = controller