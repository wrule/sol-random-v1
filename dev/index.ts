import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, getContract, getSigner, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  const x = await getContract<X>('X', '0xa33b86BC21cb47177ED4a61E6949b860b54911Bd');
  // const x = await deployContract<X>('X');
  watchContract(x);
  // const a = await x.blockNumber();
  // console.log(a);
  const tx = await x.getRandomRequestId();
  console.log(tx.hash);
}

async function dev() {
  await init();
  main();
}

dev();
