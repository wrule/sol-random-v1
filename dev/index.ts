import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, getContract, getSigner, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  // const x = await getContract<X>('X', '0x19d7c1fd38ebe7fc315ede2892ee6d460e7722cf');
  const x = await deployContract<X>('X');
  watchContract(x);
  // const a = await x.blockNumber();
  // console.log(a);
  // const tx = await x.getRandomRequestId();
  // console.log(tx.hash);
  // const tx = await await x.sendMessage('jimao hello');
  // console.log(tx.hash);
}

async function dev() {
  await init();
  main();
}

dev();
