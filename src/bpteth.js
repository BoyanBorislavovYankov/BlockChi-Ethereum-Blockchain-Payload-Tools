Web3 = require('web3');

module.exports = BptEth = function (apiUrl) {
  this.apiUrl = apiUrl;
  
  this.web3 = new Web3();
  this.web3.setProvider(new this.web3.providers.HttpProvider(apiUrl));
};

BptEth.prototype.getTransactionPayload = function (transactionHash) {
  let transaction = this.web3.eth.getTransaction(transactionHash);
    
  let result = {
    payloadHex: transaction.input,
    payloadAscii: this.toAscii(transaction.input),
    transactionDetails: transaction,
  }
  
  return result;
};

BptEth.prototype.toHex = function (data) {
  return this.web3.toHex(data);
};

BptEth.prototype.toAscii = function (data) {
  return this.web3.toAscii(data);
};