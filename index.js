//this is an example for node.js
const BptEth = require('./src/bpteth');

let apiUrl = "https://ropsten.infura.io/bYMbua7UzyBarTHQzOOL";
        
console.log('Starting Blockchain Payload Tools...');

const bptEth = new BptEth(apiUrl);

console.log('Getting transaction data...');

let transactionHash = '0x8ae745faa259299245c54e478b4f1bdf4b025f7b29de102fd0331a3ab0405779';
let transactionPayload = bptEth.getTransactionPayload(transactionHash);

console.log(transactionPayload.payloadAscii);