const { executeQuery } = require("../config/database");
const response = require("../helpers/responseHelper");
const { baseUrl } = require("../helpers/urlHelper");
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
require('dotenv').config();

const queryListItem = async (idKategori) => {
  const sqlQuery = "SELECT item.*,nama_kategori FROM item JOIN kategori ON kategori.id_kategori=item.id_kategori WHERE item.id_kategori=?";
  try {
    const result = await executeQuery(sqlQuery, [idKategori]);
    return result;
  } catch (error) {
    console.error('Error Query List Item : ', error);
  }
};

const queryDeskripsiItem = async (idItem) => {
  const sqlQuery = "SELECT item.*,nama_kategori FROM item JOIN kategori ON kategori.id_kategori=item.id_kategori WHERE item.id_item=?";
  try {
    const result = await executeQuery(sqlQuery, [idItem]);
    return result;
  } catch (error) {
    console.error('Error Query List Item : ', error);
  }
};

const listItemByKategori = async (res, idKategori) => {
  try {
    resultListItemByKategori = await queryListItem(idKategori);
    if (resultListItemByKategori) {
      setReturn = [];
      resultListItemByKategori.forEach(function (element) {
        setReturn.push(
          {
            id_item: element.id_item,
            nama_item: element.nama_item,
            nama_kategori: element.nama_kategori,
            path_images: baseUrl(element.path_images),
          }
        );
      });
      return setReturn;
    }
  } catch (error) {
    response.errorServerResponse(res, 'Terjadi kesalahan mengambil data list item');
  }
}

const deskripsiItem = async (res, idItem) => {
  try {
    [row] = await queryDeskripsiItem(idItem);
    if (row) {
      const util = require('util');
      const client = new textToSpeech.TextToSpeechClient();
      async function quickStart(text, filename) {

        // Construct the request
        const request = {
          input: { text: text },
          voice: { languageCode: 'id-ID', ssmlGender: 'FEMALE' },
          audioConfig: { audioEncoding: 'MP3' },
        };
        const [response] = await client.synthesizeSpeech(request);
        const writeFile = util.promisify(fs.writeFile);
        await writeFile('public/audio/' + filename + '.mp3', response.audioContent, 'binary');
      }
      quickStart(row.deksripsi_item, row.id_item);
      setReturn = {
        id_item: row.id_item,
        nama_item: row.nama_item,
        nama_kategori: row.nama_kategori,
        deksripsi_item: row.deksripsi_item,
        path_images: baseUrl(row.path_images),
        audio_deskripsi: baseUrl('public/audio/' + row.id_item + '.mp3')

      };
      return setReturn;
    }
  } catch (error) {
    response.errorServerResponse(res, 'Terjadi kesalahan mengambil data deskripsi item');
  }
}
module.exports = { listItemByKategori, deskripsiItem }