import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, getContract, getSigner, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  const x = await deployContract<X>('X');
  // watchContract(x);
  // await x.getRandomRequestId();
}

async function dev() {
  await init();
  main();
}

dev();
