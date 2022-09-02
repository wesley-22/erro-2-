'use strict';

var utils = require('../utils/writer.js');
var Frias = require('../service/FriasService');

module.exports.getFerias = function getFerias (req, res, next, funcId) {
  Frias.getFerias(funcId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
