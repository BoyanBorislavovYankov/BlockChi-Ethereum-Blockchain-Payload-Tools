"# Blockchain-Payload-Tools" 
==================================================

BptEth (Blockchain Payload Tools - Ethereum) is an Ethreum implementation of technology for storing and retrieving data on blockchains. It allows parties to author, to publish, to extend and to access data records in a secure, trusted manner. The data is presented as a JSON object, contained in the payload of a blockchain transaction.

Writting data to blockchain is done by: preparing the data as a JSON object, according to the provided schema, converting the JSON object to HEX and sending the transaction from the walltet with the HEX data as payload.

Reading data from blockchain is done by: reading the tranasction and getting the payload, decoding the payload from HEX to JSON, parsing and displaying the data from the JSON.

How to install  - for browser
----------------------------

Include the library from the dist folder:

```
<script src="dist/bpteth.min.js"></script>
```

Create an object instance:

```javascript
//put your Ethereum HTTP API url here or test the example
let apiUrl = "https://ropsten.infura.io/";

const bptEth = new BptEth(apiUrl);
```

To build for browser instal and run:
npm run build

How to install - for Node.js
----------------------------

Install node.js, npm and git.

Clone a copy of the git repo by running:
git clone https://github.com/BoyanBorislavovYankov/Blockchain-Payload-Tools.git

Install:
cd Blockchain-Payload-Tools
npm install

Include the library:

```javascript
const BptEth = require('./src/bpteth');
```

Create an object instance:

```javascript
//put your Ethereum HTTP API url here or test the example
let apiUrl = "https://ropsten.infura.io/";

const bptEth = new BptEth(apiUrl);
```

Examples:
----------------------------

For browser - open the one of the files: 
demo-convert.html
demo-read.html

For node.js - install and run one of the demo files: 
node demo-convert.html
node demo-read.html