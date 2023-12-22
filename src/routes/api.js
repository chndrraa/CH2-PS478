const express = require('express');
const kategoriController = require('../controllers/kategori');
const itemController = require('../controllers/item');
const route = express.Router();

route.get('/kategori', kategoriController.kategori);
route.get('/item/deskripsi/:idItem', itemController.deskripsi);
route.get('/item/:idKategori', itemController.item);
module.exports = route;