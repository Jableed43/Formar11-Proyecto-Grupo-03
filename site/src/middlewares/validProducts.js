const { check} = require('express-validator');


// Validaciones para carga y edición de productos
const validacionesProducts = [
    check('title').notEmpty().withMessage('Debes completar el campo de nombre de producto').bail()
    .isLength({min : 5}).withMessage('Mínimo 5 caracteres'),

    check('description').notEmpty().withMessage('Debes incluir una descripción').bail()
    .isLength({
        min : 20
    }).withMessage('La descripción debe tener un mínimo de 20 caracteres'),  

    // check('images').notEmpty().withMessage('Debes subir una imagen'),

    check('category').notEmpty().withMessage('Debes seleccionar una opción'),
    check('subcategory').notEmpty().withMessage('Debes seleccionar una opción'),

    check('price').notEmpty().withMessage('Debes indicar un precio de venta'),

    check('calories').notEmpty().withMessage('Debes completar el campo'),
    check('totalfat').notEmpty().withMessage('Debes completar el campo'),
    check('carb').notEmpty().withMessage('Debes completar el campo'),
    check('protein').notEmpty().withMessage('Debes completar el campo'),
    check('transfat').notEmpty().withMessage('Debes completar el campo'),
    check('saturatedfat').notEmpty().withMessage('Debes completar el campo'),
    check('cholesterol').notEmpty().withMessage('Debes completar el campo'),
    check('sodium').notEmpty().withMessage('Debes completar el campo'),
    check('sugars').notEmpty().withMessage('Debes completar el campo'),
    check('fiber').notEmpty().withMessage('Debes completar el campo'),
]

module.exports = validacionesProducts