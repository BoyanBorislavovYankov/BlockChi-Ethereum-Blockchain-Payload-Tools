"# BlockChi Ethereum - Blockchain Payload Tools" 
==================================================

Visit the website of BlockChi to learn more about the project: https://boyanborislavovyankov.github.io/BlockChi-Ethereum-Blockchain-Payload-Tools/

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

For browser - demo files are found in the docs folder, open one following links to test now:
 
JSON editor with converter, for preparing data to be written on the blockchain: 

https://boyanborislavovyankov.github.io/BlockChi-Ethereum-Blockchain-Payload-Tools/demo-editor.html

Demo of content reader : 

https://boyanborislavovyankov.github.io/BlockChi-Ethereum-Blockchain-Payload-Tools/demo-read.html


For node.js - install and run one of the demo files:
 
Demo of converter for preparing data to be written on the blockchain: 

node demo-convert.js

Demo of reader (command line arguments: network, transaction hash): 

node demo-read.js https://ropsten.infura.io/ 0xbbfd3771951f8d5ad628f7b5e17c47de589b6c62f4c02a53278e93320aba51d8