//this is an example for node.js
const BptEth = require('./src/bpteth');
const fs = require('fs');
  
console.log('Starting Blockchain Payload Tools...');

const bptEth = new BptEth();

console.log('Loading schema...');
let schemaRawData = fs.readFileSync('./schemas/default-schema.json');  
let schema = JSON.parse(schemaRawData);

console.log('Loading data...');
let dataRawData = fs.readFileSync('./schemas/sample-data.json');  
let data = JSON.parse(dataRawData);

console.log('Validating JSON:');
let validationResult = bptEth.validateJson(schema, data);
console.log('Valudation result: ' + validationResult.result);
console.log('Valudation errors: ' + validationResult.errors);