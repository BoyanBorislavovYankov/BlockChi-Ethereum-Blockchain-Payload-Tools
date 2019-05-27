var apiUrl = "https://ropsten.infura.io/bYMbua7UzyBarTHQzOOL";
var transactionHash = '0x8ae745faa259299245c54e478b4f1bdf4b025f7b29de102fd0331a3ab0405779';

console.log('Starting Blockchain Payload Tools');

Web3 = require('web3');

var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider(apiUrl));

var transaction = web3.eth.getTransaction(transactionHash);
console.log(transaction);