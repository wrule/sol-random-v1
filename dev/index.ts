import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, getContract, getSigner, init, meta } from './utils';

async function main() {
  await meta();
}

async function dev() {
  await init();
  main();
}

dev();
