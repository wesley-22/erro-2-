'use strict';

var utils = require('../utils/writer.js');
var Usurio = require('../service/UsurioService');

module.exports.getUsuario = function getUsuario (req, res, next, id) {
  Usurio.getUsuario(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsuarioDELETE = function v1UsuarioDELETE (req, res, next, user_id) {
  Usurio.v1UsuarioDELETE(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsuarioPOST = function v1UsuarioPOST (req, res, next) {
  Usurio.v1UsuarioPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsuarioPUT = function v1UsuarioPUT (req, res, next, body, email, telefone, whatsapp, oauthgoogle, oauthhotmail, nome, tipo) {
  Usurio.v1UsuarioPUT(body, email, telefone, whatsapp, oauthgoogle, oauthhotmail, nome, tipo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
