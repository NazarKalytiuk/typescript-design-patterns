import { Laptop } from './model/laptop';

export abstract class LaptopBuilder {
    public abstract setMonitorResolution();
    public abstract setProcessor();
    public abstract setMemmory();
    public abstract setHdd();
    public abstract setBattery();
    public abstract getLaptop();
}
