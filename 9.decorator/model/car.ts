export class Car {
    protected brandName: string;
    constructor() {
        console.log('car constr');
    }
    public go() {
        console.log(`I'm a ${this.brandName} and I'm on my way...`);
    }
}
