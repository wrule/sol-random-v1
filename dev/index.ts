import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, getContract, getSigner, init, meta, watchContract } from './utils';

async function main() {
  await meta();
  const x = await getContract<X>('X', '0x3223D582f446AABB4463740BeF4CF5343555cbF3');
  
  async function print() {
    const requestId1 = await x.requestId1();
    const requestId2 = await x.requestId2();
    const randomnessSave = await x.randomnessSave();
    console.log('<------>');
    console.log(requestId1);
    console.log(requestId2);
    console.log(randomnessSave);
  }

  print();

  const tx = await x.getRandomRequestId();
  console.log(tx.hash);
  const tr = await tx.wait();
  console.log(tr?.hash);

  setInterval(() => {
    print();
  }, 5000);

  // const x = await deployContract<X>('X');
  // watchContract(x);
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
