'use strict';


/**
 * Recupera a guia conforme o tipo e data especificada.
 *
 * tipo String 
 * mes Integer 
 * ano String 
 * returns byte[]
 **/
exports.getGuias = function(tipo,mes,ano) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * faz o envio de uma guia para armazenamento
 *
 * cdempresa String 
 * mes Integer 
 * ano Integer 
 * name String 
 * tipoGuia String 
 * guia byte[] 
 * returns inline_response_200
 **/
exports.postGuia = function(cdempresa,mes,ano,name,tipoGuia,guia) {
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
 * retorna lista de todas as guias de uma competencia
 *
 * mes Integer 
 * ano String 
 * returns inline_response_200_2
 **/
exports.v1GuiasListaGET = function(mes,ano) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "competencia" : "012022",
  "tipo" : "IRRF",
  "nome_arq" : "DARF IRRF - 202201 VENC 20_02_2022.pdf"
}, {
  "competencia" : "022022",
  "tipo" : "IRRF",
  "nome_arq" : "DARF IRRF - 202202 VENC 20_03_2022.pdf"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

