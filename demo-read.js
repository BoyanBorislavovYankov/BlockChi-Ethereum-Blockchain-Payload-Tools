//this is an example for node.js
const BlockChiEth = require('./src/blockchieth');

//put your Ethereum HTTP API url here or test the example
let apiUrl = "https://ropsten.infura.io/";

//put your Ethereum transaction hash here or test the example
let transactionHash = '0xbbfd3771951f8d5ad628f7b5e17c47de589b6c62f4c02a53278e93320aba51d8';
        
console.log('BlockChi - Blockchain Payload Tools Demo');

const blockChiEth = new BlockChiEth(apiUrl);

console.log('Getting transaction data...');

let transactionPayload = blockChiEth.getTransactionPayload(transactionHash);

console.log('Transaction data, raw (JSON / text):');
console.log(transactionPayload.payloadAscii);

let transactionPayloadObject = blockChiEth.textToJson(transactionPayload.payloadAscii);

console.log('Transaction data, decoded:');

console.log('Title: '+transactionPayloadObject.result.title);
console.log('Description: '+transactionPayloadObject.result.description);
console.log('Author: '+transactionPayloadObject.result.author);
console.log('Network: '+apiUrl);
console.log('Transaction: '+transactionHash);

for (var itemNumber = 0; itemNumber < transactionPayloadObject.result.items.length; itemNumber++) {
  console.log('Item title: '+transactionPayloadObject.result.items[itemNumber].title);
  if (transactionPayloadObject.result.items[itemNumber].type === undefined || transactionPayloadObject.result.items[itemNumber].type == '' || transactionPayloadObject.result.items[itemNumber].type == 'text/plain'){ 
    console.log(transactionPayloadObject.result.items[itemNumber].data);
  } else {
    console.log('Error: data type '+transactionPayloadObject.result.items[itemNumber].type+' is not supported by the reader!</p>');
  }            
}