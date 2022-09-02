'use strict';

var utils = require('../utils/writer.js');
var Mdulos = require('../service/MdulosService');

module.exports.getModulos = function getModulos (req, res, next, user_id) {
  Mdulos.getModulos(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putModulo = function putModulo (req, res, next, mod_id, mod_nome, mod_nivel) {
  Mdulos.putModulo(mod_id, mod_nome, mod_nivel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ModulosDELETE = function v1ModulosDELETE (req, res, next, mod_id) {
  Mdulos.v1ModulosDELETE(mod_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ModulosPOST = function v1ModulosPOST (req, res, next, mod_nome, mod_nivel) {
  Mdulos.v1ModulosPOST(mod_nome, mod_nivel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
