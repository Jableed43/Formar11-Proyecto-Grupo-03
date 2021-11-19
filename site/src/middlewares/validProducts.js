const { check, body } = require('express-validator');

// Validaciones para carga y edición de productos
const validacionesProducts = [
    check('title').notEmpty().withMessage('Debes completar el campo de nombre de producto'),
    check('description').notEmpty().withMessage('Debes incluir una descripción'),
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