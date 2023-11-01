import { X } from '../typechain-types';
import { deployContract, getContract, init, meta } from './utils';

async function main() {
  await meta();
  const x = await getContract<X>('X', '0x68B1D87F95878fE05B998F19b66F4baba5De1aed');
  // const x = await deployContract<X>('X');
  const num = await x.getRandom();
  console.log(num);
}

async function dev() {
  await init();
  main();
}

dev();
