'use strict';

var utils = require('../utils/writer.js');
var RotaDeStatusDaAPI = require('../service/RotaDeStatusDaAPIService');

module.exports.v1StatusGET = function v1StatusGET (req, res, next) {
  RotaDeStatusDaAPI.v1StatusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
