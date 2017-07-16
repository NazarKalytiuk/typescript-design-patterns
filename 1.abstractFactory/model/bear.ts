import { AnimalToy } from './animalToy';

export abstract class Bear extends AnimalToy{
    constructor(name: string) {
        super(name);
    }
}
