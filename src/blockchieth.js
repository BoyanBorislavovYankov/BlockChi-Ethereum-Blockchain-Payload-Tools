const Web3 = require('web3');
const Ajv = require('ajv');

module.exports = BlockChiEth = function (apiUrl) {
  
  this.web3 = new Web3();
  this.ajv = new Ajv({schemaId: 'auto'});
  
  this.apiUrl = apiUrl;
  if (this.apiUrl){
    this.setProvider(apiUrl);
  }
};

BlockChiEth.prototype.setProvider = function (apiUrl) {
  return this.web3.setProvider(new this.web3.providers.HttpProvider(apiUrl));
};

BlockChiEth.prototype.getTransactionPayload = function (transactionHash) {
  let transaction = this.web3.eth.getTransaction(transactionHash);
    
  let result = {
    payloadHex: transaction.input,
    payloadAscii: this.toUtf8(transaction.input),
    transactionDetails: transaction,
  }
  
  return result;
};

BlockChiEth.prototype.toHex = function (data) {
  return this.web3.fromUtf8(data);
};

BlockChiEth.prototype.toUtf8 = function (data) {
  return this.web3.toUtf8(data);
};

BlockChiEth.prototype.validateJson = function (schema, data) {
  let validate = this.ajv.compile(schema);
  let valid = validate(data);
  
  return {
    result: valid,
    errors: validate.errors
  };
};

BlockChiEth.prototype.textToJson = function (data) {
  let result = null;
  let errors = null;
  try {
    result = JSON.parse(data);
  } catch(e) {
    errors = e; 
  }

  return {
    result: result,
    errors: errors
  };
}

BlockChiEth.prototype.jsonToText = function (data) {
  return JSON.stringify(data);
};

BlockChiEth.prototype.escapeHtmlEntities = function (rawStr) {
  let encodedStr = rawStr.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
     return '&#'+i.charCodeAt(0)+';';
  });
  
  return encodedStr;
};