import { TeddyToyFactory } from './teddyToyFactory';
import { ToyFactory } from './toyFactory';
import { WoodenToyFactory } from './woodenToyFactory';

let factory: ToyFactory = new TeddyToyFactory();

let bear = factory.getBear();
let cat = factory.getCat();

console.log(`I've got a ${bear.name} and ${cat.name}`);

factory = new WoodenToyFactory();

bear = factory.getBear();
cat = factory.getCat();

console.log(`I've got a ${bear.name} and ${cat.name}`);
