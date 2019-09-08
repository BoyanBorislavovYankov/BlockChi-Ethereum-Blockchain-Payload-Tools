//this is an example for node.js
const BlockChiEth = require('./src/blockchieth');

//put your Ethereum HTTP API url here or test the example
let apiUrl = "https://ropsten.infura.io/";

//put your Ethereum transaction hash here or test the example
let transactionHash = '0x243b483b8f3aa0d22a732f1075eccfe499d4dd535d45a2c0858d560ffd2f6c83';
        
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

for (let itemNumber = 0; itemNumber < transactionPayloadObject.result.items.length; itemNumber++) {
  let item = transactionPayloadObject.result.items[itemNumber];
  
  console.log('Item title: '+item.title);
  
  if (item.data !== undefined && item.data != ''){
    console.log('Item data: '+item.data);
  }
  
  if (item.dataUri !== undefined && item.dataUri != ''){
    let dataType = item.dataUri.split(';')[0];
    let mimeType = dataType.split(':')[1];
    
    if (mimeType == 'image/png' || mimeType == 'image/jpeg'){
      console.log('(image attachment)');;
    } else {
      console.log('Error: data type '+mimeType+' is not supported by the reader!');
    }
  }       
}