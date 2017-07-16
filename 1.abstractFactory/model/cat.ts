import { AnimalToy } from './animalToy';

export abstract class Cat extends AnimalToy {
    constructor(name: string) {
        super(name);
    }
 }
