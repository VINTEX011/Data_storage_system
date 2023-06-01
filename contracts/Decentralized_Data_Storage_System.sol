// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DigitalDataStorage is ERC20 {
    uint256 private _dataCounter;
    mapping(uint256 => string) private _dataStorage;
    address private _owner;

    event DataStored(uint256 indexed index, string data);

    constructor() ERC20("Digital Data Storage Token", "DDST") {
        _dataCounter = 0;
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Only contract owner can perform this action");
        _;
    }

    function storeData(string memory data) external {
        _dataCounter++;
        _dataStorage[_dataCounter] = data;
        _mint(msg.sender, 1);
        emit DataStored(_dataCounter, data);
    }

    function getData(uint256 index) external view returns (string memory) {
        require(index > 0 && index <= _dataCounter, "Invalid index");
        return _dataStorage[index];
    }

    function transferData(uint256 index, address to) external onlyOwner {
        require(index > 0 && index <= _dataCounter, "Invalid index");
        require(to != address(0), "Invalid recipient address");
        _dataStorage[index] = "";
        _transfer(msg.sender, to, 1);
    }
}

