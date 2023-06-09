// Replace with the actual deployed contract address
const contractAddress = "0x4E483C4327255526bd251e5F3e23491A147Fd52e";
// Replace with the actual contract ABI
const contractABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_dataId",
        "type": "uint256"
      }
    ],
    "name": "getDataEntry",
    "outputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_dataHash",
        "type": "string"
      }
    ],
    "name": "storeData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_dataId",
        "type": "uint256"
      },
      {
        "name": "_toAddress",
        "type": "address"
      }
    ],
    "name": "transferData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable"
  }