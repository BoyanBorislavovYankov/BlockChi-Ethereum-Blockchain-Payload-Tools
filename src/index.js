Web3 = require('web3');

class BptEth {

  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  
    this.web3 = new Web3();
    this.web3.setProvider(new this.web3.providers.HttpProvider(apiUrl));
  }
  
  getTransactionPayload(transactionHash){
    let transaction = this.web3.eth.getTransaction(transactionHash);
    
    let result = {
      payloadHex: transaction.input,
      payloadAscii: this.toAscii(transaction.input),
      transactionDetails: transaction,
    }
    
    return result;
  }
  
  toHex(data){
    return this.web3.toHex(data);
  }
  
  toAscii(data){
    return this.web3.toAscii(data);
  }
  
}


let apiUrl = "https://ropsten.infura.io/bYMbua7UzyBarTHQzOOL";

console.log('Starting Blockchain Payload Tools...');
const bptEth = new BptEth(apiUrl);

console.log('Getting transaction data...');
let transactionHash = '0x8ae745faa259299245c54e478b4f1bdf4b025f7b29de102fd0331a3ab0405779';
let transactionPayload = bptEth.getTransactionPayload(transactionHash);

console.log(transactionPayload.payloadAscii);