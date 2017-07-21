import { Car } from './car';
export class DecoratorCar extends Car {
    protected decoratedCar: Car;
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
    public go() {
        this.decoratedCar.go();
    }
}
