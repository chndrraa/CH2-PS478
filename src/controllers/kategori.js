const kategoriModel = require("../models/kategori");
const response = require("../helpers/responseHelper");

const kategori = async (req, res) => {
  const kategori = await kategoriModel.listKategori(res);
  if (kategori) {
    response.successResponse(res, '', kategori);
  }
}

module.exports = {
  kategori
}