//this is an example for node.js
const BptEth = require('./src/bpteth');

//put your Ethereum HTTP API url here or test the example
let apiUrl = "https://ropsten.infura.io/";

//put your Ethereum transaction hash here or test the example
let transactionHash = '0x8ae745faa259299245c54e478b4f1bdf4b025f7b29de102fd0331a3ab0405779';
        
console.log('Starting Blockchain Payload Tools...');

const bptEth = new BptEth(apiUrl);

console.log('Getting transaction data...');


let transactionPayload = bptEth.getTransactionPayload(transactionHash);

console.log(transactionPayload.payloadAscii);