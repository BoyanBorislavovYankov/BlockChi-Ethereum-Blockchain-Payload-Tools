//this is an example for node.js
const BptEth = require('./src/bpteth');

console.log('Starting Blockchain Payload Tools...');

const bptEth = new BptEth();

let xmlValid = '<?xml version="1.0"?><comment><author>author</author><content>nothing</content></comment>';
let xmlInvalid = '<?xml version="1.0"?><comm>A comment</comment>';

console.log('Trying with valid XML:');
let xmlValidationResult1 = bptEth.validateXml(xmlValid);
console.log(xmlValidationResult1);

console.log('Trying with invalid XML:');
let xmlValidationResult2 = bptEth.validateXml(xmlInvalid);
console.log(xmlValidationResult2);