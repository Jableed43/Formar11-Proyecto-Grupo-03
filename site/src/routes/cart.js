var express = require('express');
var router = express.Router();
const {show, add, remove, removeTotalItem, empty} = require('../controllers/cartController')

router

    .get('/show', show)
    .get('/add/:id', add)
    .get('/remove/:id', remove)
    .get('/removetotalitem/:id', removeTotalItem)
    .get('/empty', empty)

module.exports = router;