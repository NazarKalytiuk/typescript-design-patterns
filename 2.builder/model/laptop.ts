export class Laptop {
    public monitorResolution: string;
    public processor: string;
    public memmory: string;
    public battery: string;
    public hdd: string;

    public toString() {
        return `Laptop: ${this.monitorResolution}, ${this.memmory}, ${this.processor}, ${this.battery}, ${this.hdd}`;
    }
}
