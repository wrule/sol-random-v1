// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract X {
  function getRandom() external view returns (uint256) {
    bytes32 data = keccak256(abi.encodePacked(msg.sender));
    return uint256(data);
  }

  event sendMessageEvent(string message);
  function sendMessage(string memory message) public {
    emit sendMessageEvent(message);
  }

  event fallbackEvent(address sender, uint value, bytes data);
  fallback() external payable {
    emit fallbackEvent(msg.sender, msg.value, msg.data);
  }

  event receiveEvent(address sender, uint value);
  receive() external payable {
    emit receiveEvent(msg.sender, msg.value);
  }
}
