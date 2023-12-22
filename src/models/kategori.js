const { executeQuery } = require("../config/database");
const response = require("../helpers/responseHelper");
const { baseUrl } = require("../helpers/urlHelper");

const queryListKategori = async () => {
  const sqlQuery = "SELECT * FROM kategori";
  try {
    const result = await executeQuery(sqlQuery);
    return result;
  } catch (error) {
    console.error('Error Query List Kategori : ', error);
  }
};
const listKategori = async (res) => {
  try {
    resultListKategori = await queryListKategori();
    if (resultListKategori) {
      setReturn = [];
      resultListKategori.forEach(function (element) {
        setReturn.push(
          {
            id_kategori: element.id_kategori,
            nama_kategori: element.nama_kategori,
            path_icon_kategori: baseUrl(element.path_icon_kategori),
          }
        );
      });
      return setReturn;
    }
  } catch (error) {
    response.errorServerResponse(res, 'Terjadi kesalahan mengambil data list kategori');
  }
}
module.exports = { listKategori }