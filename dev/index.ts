import { X } from '../typechain-types';
import { deployContract, getContract, init, meta } from './utils';

async function main() {
  await meta();
  const x = await getContract<X>('X', '0x0B306BF915C4d645ff596e518fAf3F9669b97016');
  // const x = await deployContract<X>('X');
  const num = await x.getRandom();
  console.log(num);
}

async function dev() {
  await init();
  main();
}

dev();
