//this is an example for node.js
const BlockChiEth = require('./src/blockchieth');

//put your Ethereum HTTP API url here or test the example
let apiUrl = "https://ropsten.infura.io/";

//put your Ethereum transaction hash here or test the example
let transactionHash = '0x512e6d93aeb2d8a3884270b37f574e4bdd2c2f29d86af335aee0a7c469b281e7';
        
console.log('BlockChi - Blockchain Payload Tools Demo');

const blockChiEth = new BlockChiEth(apiUrl);

console.log('Getting transaction data...');

let transactionPayload = blockChiEth.getTransactionPayload(transactionHash);

console.log('Transaction data, raw (JSON / text):');
console.log(transactionPayload.payloadAscii);

let transactionPayloadObject = blockChiEth.textToJson(transactionPayload.payloadAscii);

console.log('Transaction data, decoded:');
console.log('Description: '+transactionPayloadObject.result.description);
console.log('Item: '+transactionPayloadObject.result.items[0].type);
console.log(transactionPayloadObject.result.items[0].title);
console.log(transactionPayloadObject.result.items[0].data);