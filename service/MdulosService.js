'use strict';


/**
 * retorna a lista de módulos disponiveis.
 *
 * user_id Integer 
 * returns inline_response_200_5
 **/
exports.getModulos = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "mod_nome" : "mod_nome",
  "mod_id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * altera um determinado módulo.
 *
 * mod_id Integer 
 * mod_nome String  (optional)
 * mod_nivel Integer  (optional)
 * returns inline_response_200
 **/
exports.putModulo = function(mod_id,mod_nome,mod_nivel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * remove um determinado módulo.
 *
 * mod_id Integer 
 * returns inline_response_200
 **/
exports.v1ModulosDELETE = function(mod_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adiciona um novo módulo.
 *
 * mod_nome String 
 * mod_nivel Integer 
 * returns inline_response_200
 **/
exports.v1ModulosPOST = function(mod_nome,mod_nivel) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

