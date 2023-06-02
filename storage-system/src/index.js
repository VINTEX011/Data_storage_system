import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Open Store Data screen
function openStoreDataScreen() {
  document.getElementById("storeDataScreen").style.display = "block";
  document.getElementById("transferDataScreen").style.display = "none";
}

// Open Transfer Data screen
function openTransferDataScreen() {
  document.getElementById("storeDataScreen").style.display = "none";
  document.getElementById("transferDataScreen").style.display = "block";
}

// Store Data
function storeData(event) {
  event.preventDefault();
  const dataHash = document.getElementById("dataHash").value;
  // TODO: Call smart contract function to store data using dataHash
  console.log("Data hash:", dataHash);
  document.getElementById("dataHash").value = "";
}

// Transfer Data
function transferData(event) {
  event.preventDefault();
  const dataId = document.getElementById("dataId").value;
  const toAddress = document.getElementById("toAddress").value;
  // TODO: Call smart contract function to transfer data using dataId and toAddress
  console.log("Data ID:", dataId);
  console.log("To Address:", toAddress);
  document.getElementById("dataId").value = "";
  document.getElementById("toAddress").value = "";
}

// Event Listeners
document.getElementById("storeDataBtn").addEventListener("click", storeData);
document.getElementById("transferDataBtn").addEventListener("click", transferData);
document.getElementById("openStoreDataBtn").addEventListener("click", openStoreDataScreen);
document.getElementById("openTransferDataBtn").addEventListener("click", openTransferDataScreen);
