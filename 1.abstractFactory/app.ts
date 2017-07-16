import { TeddyToyFactory } from './teddyToyFactory';
import { ToyFactory } from './toyFactory';
import { WoodenToyFactory } from './woodenToyFactory';

let factory = new TeddyToyFactory() as ToyFactory;

let bear = factory.getBear();
let cat = factory.getCat();

console.log(`I've got a ${bear.name} and ${cat.name}`);

factory = new WoodenToyFactory() as ToyFactory;

bear = factory.getBear();
cat = factory.getCat();

console.log(`I've got a ${bear.name} and ${cat.name}`);
