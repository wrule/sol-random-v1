import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, getContract, getSigner, init, meta } from './utils';

async function main() {
  await meta();
  const x = await getContract<X>('X', '0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1');
  // const x = await deployContract<X>('X');
  const num = await x.getRandom();
  console.log(num);
  // const a = await getSigner().provider.getBlockNumber();
  // console.log(a);
  // const a = await x.blockNumber();
  // const b = await x.blockTimestamp();
  // console.log(a);
  // console.log(b);
  // const c = await x.getBlockhash(a - 1n);
  // console.log(c);
  // const d = await getSigner().provider.getBlockNumber();
  // console.log(d);
}

async function dev() {
  await init();
  main();
}

dev();
