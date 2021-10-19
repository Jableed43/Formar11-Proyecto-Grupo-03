const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    // Root - Show all products
	index: (req, res) => {
		let Tacos = products.filter(element => element.subcategory === "Tacos")
		let Burritos = products.filter(element => element.subcategory === "Burritos")
		let Quesadillas = products.filter(element => element.subcategory === "Quesadillas")
		let Entradas = products.filter(element => element.subcategory === "Entradas")
		let Platos = products.filter(element => element.subcategory === "Platos")
		let Ensaladas = products.filter(element => element.subcategory === "Ensaladas")
		let Salsas = products.filter(element => element.subcategory === "Salsas")
		let Dulces = products.filter(element => element.subcategory === "Dulces")
		let Gaseosas = products.filter(element => element.subcategory === "Gaseosas")
		let Jugo = products.filter(element => element.subcategory === "Jugo")
		let Agua = products.filter(element => element.subcategory === "Agua")
		res.render('products', {products, Tacos, Burritos, Quesadillas, Entradas, Platos, Ensaladas, Salsas, Dulces, Gaseosas, Jugo, Agua})
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
		const product = products.find(product => product.id === +req.params.id)
		res.render('edit', {product})
	},
	// Update - Method to update
	update: (req, res) => {
		const productUpdate = products.find(product => product.id === +req.params.id)
		const {title, price, category, subcategory, description} = req.body
		if (productUpdate) {
            productUpdate.title = title
            productUpdate.price = +price
			productUpdate.subcategory = subcategory
            productUpdate.category = category
            productUpdate.description = description

			fs.writeFileSync(productsFilePath, JSON.stringify(products))

            res.redirect(`/products/detail/$(req.params.id)`)
		} else {
			res.redirect('/')
		}
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		products = products.filter(product => product.id === +req.params.id)

		fs.writeFileSync(productsFilePath, JSON.stringify(products))

        res.redirect('/')
	}

}



module.exports = controller