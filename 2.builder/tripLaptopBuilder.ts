import { LaptopBuilder } from './laptopBuilder';
import { Laptop } from './model/laptop';

export class TripLaptopBuilder extends LaptopBuilder {
    private _laptop: Laptop;

    constructor() {
        super();
        this._laptop = new Laptop();
    }

    public getLaptop(): Laptop {
        return this._laptop;
    }

    public setMonitorResolution() {
        this._laptop.monitorResolution = '1280x720';
    }

    public setProcessor() {
        this._laptop.processor = '2.2GHz';
    }

    public setMemmory() {
        this._laptop.memmory = '4GB';
    }

    public setHdd() {
        this._laptop.hdd = '256TB';
    }

    public setBattery() {
        this._laptop.battery = '50W';
    }
}
