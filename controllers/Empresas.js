'use strict';

var utils = require('../utils/writer.js');
var Empresas = require('../service/EmpresasService');

module.exports.getEmpresas = function getEmpresas (req, res, next, email) {
  Empresas.getEmpresas(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
