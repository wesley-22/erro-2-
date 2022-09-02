'use strict';


/**
 * Permite alterar a senha do login
 *
 * login String 
 * senha String 
 * nova_senha String 
 * returns inline_response_200
 **/
exports.v1LoginPATCH = function(login,senha,nova_senha) {
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
 * faz o envio dos dados de login
 *
 * login String 
 * senha String 
 * returns inline_response_200
 **/
exports.v1LoginPOST = function(login,senha) {
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

