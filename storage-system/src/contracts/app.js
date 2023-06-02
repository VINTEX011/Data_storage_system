// Import required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const contractABI = require('./contractABI'); // Replace with your contract ABI
const contractAddress = '0x4E483C4327255526bd251e5F3e23491A147Fd52e'; // Replace with your contract address

// Initialize the Express app
const app = express();

// Configure bodyParser middleware to parse JSON data
app.use(bodyParser.json());

// Create a Web3 instance
const web3 = new Web3('http://localhost:8545'); // Replace with your Ethereum node URL

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Store Data endpoint
app.post('/store', async (req, res) => {
  try {
    const dataHash = req.body.dataHash;
    // Call the smart contract function to store data using dataHash
    await contract.methods.storeData(dataHash).send({ from: req.body.senderAddress });
    res.status(200).json({ message: 'Data stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to store data' });
  }
});

// Transfer Data endpoint
app.post('/transfer', async (req, res) => {
  try {
    const dataId = req.body.dataId;
    const toAddress = req.body.toAddress;
    // Call the smart contract function to transfer data using dataId and toAddress
    await contract.methods.transferData(dataId, toAddress).send({ from: req.body.senderAddress });
    res.status(200).json({ message: 'Data transferred successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to transfer data' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
