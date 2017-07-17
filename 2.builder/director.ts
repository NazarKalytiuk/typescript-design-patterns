import { LaptopBuilder } from './laptopBuilder';
import { Laptop } from './model/laptop';

export class Director {
    private _builder: LaptopBuilder;

    constructor(builder: LaptopBuilder) {
        this._builder = builder;
    }

    public constructLaptop() {
        this._builder.setBattery();
        this._builder.setHdd();
        this._builder.setMemmory();
        this._builder.setMonitorResolution();
        this._builder.setProcessor();
    }

    public getLaptop(): Laptop {
        return this._builder.getLaptop();
    }
}
