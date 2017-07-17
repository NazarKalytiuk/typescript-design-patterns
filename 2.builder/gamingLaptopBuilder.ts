import { LaptopBuilder } from './laptopBuilder';
import { Laptop } from './model/laptop';

export class GamingLaptopBuilder extends LaptopBuilder {
    private _laptop: Laptop;

    constructor() {
        super();
        this._laptop = new Laptop();
    }

    public getLaptop(): Laptop {
        return this._laptop;
    }

    public setMonitorResolution() {
        this._laptop.monitorResolution = '1920x1080';
    }

    public setProcessor() {
        this._laptop.processor = '2.8GHz';
    }

    public setMemmory() {
        this._laptop.memmory = '16GB';
    }

    public setHdd() {
        this._laptop.hdd = '1TB';
    }

    public setBattery() {
        this._laptop.battery = '76W';
    }
}
