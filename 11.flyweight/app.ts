import { Goblin } from './model/goblin';

const arr: Goblin[] = [];

for (let index = 0; index < 100; index++) {
    arr.push(new Goblin());
} // 3964006 vs 394712972

console.log(process.memoryUsage());
