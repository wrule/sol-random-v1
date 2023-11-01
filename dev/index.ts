import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, getContract, getSigner, init, meta } from './utils';

async function main() {
  await meta();
  // const x = await getContract<X>('X', '0x68B1D87F95878fE05B998F19b66F4baba5De1aed');
  const x = await deployContract<X>('X');
  // const num = await x.getRandom();
  // console.log(num);
  // const a = await getSigner().provider.getBlockNumber();
  // console.log(a);
}

async function dev() {
  await init();
  main();
}

dev();
