// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedDataStorageSystem {
    struct Data {
        bytes32 dataHash;
        address owner;
        mapping(address => bool) authorizedUsers;
    }

    mapping(bytes32 => Data) private dataStore;
    
    event DataStored(bytes32 dataHash, address indexed owner);
    event DataTransferred(bytes32 dataHash, address indexed from, address indexed to);

    modifier onlyOwner(bytes32 dataHash) {
        require(dataStore[dataHash].owner == msg.sender, "You are not the owner of this data");
        _;
    }
    
    modifier onlyAuthorized(bytes32 dataHash) {
        require(dataStore[dataHash].authorizedUsers[msg.sender], "You are not authorized to access this data");
        _;
    }

    function storeData(bytes32 dataHash) public {
        require(dataStore[dataHash].owner == address(0), "Data with this hash already exists");
        dataStore[dataHash].dataHash = dataHash;
        dataStore[dataHash].owner = msg.sender;
        dataStore[dataHash].authorizedUsers[msg.sender] = true;
        emit DataStored(dataHash, msg.sender);
    }

    function transferData(bytes32 dataHash, address recipient) public onlyOwner(dataHash) {
        require(recipient != address(0), "Invalid recipient address");
        dataStore[dataHash].owner = recipient;
        dataStore[dataHash].authorizedUsers[recipient] = true;
        emit DataTransferred(dataHash, msg.sender, recipient);
    }

    function authorizeUser(bytes32 dataHash, address user) public onlyOwner(dataHash) {
        require(user != address(0), "Invalid user address");
        dataStore[dataHash].authorizedUsers[user] = true;
    }

    function revokeAuthorization(bytes32 dataHash, address user) public onlyOwner(dataHash) {
        require(user != address(0), "Invalid user address");
        dataStore[dataHash].authorizedUsers[user] = false;
    }

    function getData(bytes32 dataHash) public view onlyAuthorized(dataHash) returns (bytes32, address) {
        Data storage data = dataStore[dataHash];
        return (data.dataHash, data.owner);
    }

    function isAuthorized(bytes32 dataHash, address user) public view returns (bool) {
        return dataStore[dataHash].authorizedUsers[user];
    }
}
