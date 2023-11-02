// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/shared/token/ERC677/LinkToken.sol";
import "@chainlink/contracts/src/v0.8/vrf/VRFCoordinatorV2.sol";

LinkToken constant linkToken = LinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
VRFCoordinatorV2 constant vrfCoordinatorV2 = VRFCoordinatorV2(0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625);

contract X is VRFConsumerBaseV2 {
  constructor() VRFConsumerBaseV2(address(vrfCoordinatorV2)) { }

  uint256 fee = 0.25 * 10 ** 18;

  function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal override {

  }

  function getRandomRequestId() external {

  }

  function getRandom() external view returns (uint256) {
    bytes32 data = keccak256(abi.encodePacked(
      block.number,
      msg.sender,
      blockhash(block.timestamp - 1)
    ));
    // bytes32 data = blockhash(0);
    return uint256(data);
  }

  function blockHash() external view returns (bytes32) {
    return blockhash(block.timestamp - 1);
  }

  function blockNumber() external view returns (uint256) {
    return block.number;
  }

  function blockTimestamp() external view returns (uint256) {
    return block.timestamp;
  }

  function getBlockhash(uint256 id) external view returns (bytes32) {
    return blockhash(id);
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
