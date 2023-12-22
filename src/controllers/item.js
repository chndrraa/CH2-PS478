const itemModel = require("../models/item");
const response = require("../helpers/responseHelper");

const item = async (req, res) => {
  const idKategori = req.params.idKategori;
  const item = await itemModel.listItemByKategori(res, idKategori);
  if (item) {
    response.successResponse(res, '', item);
  }
}
const deskripsi = async (req, res) => {
  const idItem = req.params.idItem;
  const item = await itemModel.deskripsiItem(res, idItem);
  if (item) {
    response.successResponse(res, '', item);
  }
}

module.exports = {
  item, deskripsi
}