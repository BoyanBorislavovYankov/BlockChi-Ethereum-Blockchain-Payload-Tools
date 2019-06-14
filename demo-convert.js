//this is an example for node.js
const BptEth = require('./src/bpteth');
const fs = require('fs');
  
console.log('Blockchain Payload Tools Demo');

console.log('Validate JSON payload and convert to hex');

const bptEth = new BptEth();

console.log('Loading schema...');
let schemaRawData = fs.readFileSync('./schemas/default-schema.json', "utf8");  
let schema = bptEth.textToJson(schemaRawData);

console.log('Loading data...');
let operationInput = fs.readFileSync('./schemas/sample-data.json', "utf8");  

//validate data
console.log('Validating JSON:');
let errorString = '';

let operationInputJson = bptEth.textToJson(operationInput);

if (operationInputJson.result){
  let validationResult = bptEth.validateJson(schema, operationInputJson.result);
  
  errorString += 'Validation result: '+validationResult.result+' ';  
  if (validationResult.errors){ 
    errorString += ' Validation errors: '+bptEth.jsonToText(validationResult.errors);
  }
} else {
  errorString += 'JSON errors: '+operationInputJson.errors;
}
console.log(errorString);

//convert data to hex
console.log('Converting to HEX:');
let operationOutput = bptEth.toHex(operationInput);
console.log(operationOutput);

console.log('To store the document on blockchain, use the HEX value as transaction payload!');