// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 <0.9.0;

contract Bmc{
    struct memo{
        string name;
        string message;
        uint timestamp;
        address sender;
    }
    memo[] Memos;
    address payable owner;
    constructor() {
        owner = payable(msg.sender);
    }
    function buycoffee(string memory name, string memory message) public payable {
        require(msg.value>0,"Please pay some eth");
        owner.transfer(msg.value);
        Memos.push(memo(name, message, block.timestamp, msg.sender));
    }
    function getMemos() public view returns (memo[] memory){
        return Memos;
    }
}