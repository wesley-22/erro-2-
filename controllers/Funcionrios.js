'use strict';

var utils = require('../utils/writer.js');
var Funcionrios = require('../service/FuncionriosService');

module.exports.getFuncionarios = function getFuncionarios (req, res, next, empresaId) {
  Funcionrios.getFuncionarios(empresaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
