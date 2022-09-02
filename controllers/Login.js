'use strict';

var utils = require('../utils/writer.js');
var Login = require('../service/LoginService');

module.exports.v1LoginPATCH = function v1LoginPATCH (req, res, next, login, senha, nova_senha) {
  Login.v1LoginPATCH(login, senha, nova_senha)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LoginPOST = function v1LoginPOST (req, res, next, login, senha) {
  Login.v1LoginPOST(login, senha)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
