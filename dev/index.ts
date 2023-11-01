import { X } from '../typechain-types';
import { deployContract, init, meta } from './utils';

async function main() {
  await meta();
  const x = await deployContract<X>('X');
  const num = await x.getRandom();
  console.log(num);
}

async function dev() {
  await init();
  main();
}

dev();
