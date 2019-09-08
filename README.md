"# BlockChi Ethereum - Blockchain Payload Tools" 
==================================================

BlockChi Ethereum (Blockchain Payload Tools) is an Ethreum implementation of technology for storing and retrieving data on blockchains. It allows parties to author, to publish, to extend and to access data records in a secure, trusted manner. The data is presented as a JSON object, contained in the payload of a blockchain transaction.

Writing data to blockchain is done by: preparing the data as a JSON object, according to the provided schema, converting the JSON object to HEX and sending the transaction from the wallet with the HEX data as payload.

Reading data from blockchain is done by: reading the tranasction and getting the payload, decoding the payload from HEX to JSON, parsing and displaying the data from the JSON.

Demo:
----------------------------

Blockchain publishing portal: http://satoshijournal.com/

Published demo content: https://satoshijournal.com/the-gift-of-the-magi-read-on-blockchain/

Editor, for preparing data to be written on the blockchain: https://satoshijournal.com/blockchi-editor/

How to install  - for browser
----------------------------

Include the library from the dist folder:

```
<script src="dist/blockchieth.min.js"></script>
```

Create an object instance:

```javascript
//put your Ethereum HTTP API url here or test the example
let apiUrl = "https://ropsten.infura.io/";

const blockChiEth = new BlockChiEth(apiUrl);
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
const BlockChiEth = require('./src/blockchieth');
```

Create an object instance:

```javascript
//put your Ethereum HTTP API url here or test the example
let apiUrl = "https://ropsten.infura.io/";

const blockChiEth = new BlockChiEth(apiUrl);
```

Examples:
----------------------------

For browser - open one of the files:
 
JSON editor with converter, for preparing data to be written on the blockchain: 

demo-editor.html

Demo of reader: 

demo-read.html


For node.js - install and run one of the demo files:
 
Demo of converter for preparing data to be written on the blockchain: 

node demo-convert.js

Demo of reader (command line arguments: network, transaction hash): 

node demo-read.js https://ropsten.infura.io/ 0xbbfd3771951f8d5ad628f7b5e17c47de589b6c62f4c02a53278e93320aba51d8