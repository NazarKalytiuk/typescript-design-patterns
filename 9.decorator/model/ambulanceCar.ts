import { Car } from './car';
import { DecoratorCar } from './decoratorCar';

export class AmbulanceCar extends DecoratorCar {
    constructor(car: Car) {
        super(car);
    }
    public go() {
        super.go();
        console.log('BEEEP BEEEP');
    }
}
