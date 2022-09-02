'use strict';


/**
 * retorna os dados de usuário
 *
 * id Integer ID do funcionario (optional)
 * returns inline_response_200_1
 **/
exports.getUsuario = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 0,
  "nome" : "Nome do Usuário"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * user_id Integer ID única do usuário.
 * no response value expected for this operation
 **/
exports.v1UsuarioDELETE = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * cadastra um novo usuário.
 *
 * no response value expected for this operation
 **/
exports.v1UsuarioPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body V1_usuario_body  (optional)
 * email String e-mail do usuário. (optional)
 * telefone Integer telefone do usuário. (optional)
 * whatsapp Boolean caso o telefone seja do whatsapp. (optional)
 * oauthgoogle String oauth do usuário. (optional)
 * oauthhotmail String oauth do usuário. (optional)
 * nome Integer nome do usuário. (optional)
 * tipo Integer email do usuário. (optional)
 * no response value expected for this operation
 **/
exports.v1UsuarioPUT = function(body,email,telefone,whatsapp,oauthgoogle,oauthhotmail,nome,tipo) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

