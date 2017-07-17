import { Director } from './director';
import { GamingLaptopBuilder } from './gamingLaptopBuilder';
import { TripLaptopBuilder } from './tripLaptopBuilder';

const tripBuilder = new TripLaptopBuilder();
const gamingBuilder = new GamingLaptopBuilder();

let director = new Director(tripBuilder);
director.constructLaptop();
let laptop = director.getLaptop();
console.log(laptop.toString());

director = new Director(gamingBuilder);
director.constructLaptop();
laptop = director.getLaptop();
console.log(laptop.toString());
