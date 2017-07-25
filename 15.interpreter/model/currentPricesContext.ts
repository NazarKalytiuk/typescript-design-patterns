import { Dictionary } from '../../lib/dictionary';
export class CurrentPricesContext {
    private prices: Dictionary<string, number>;
    constructor() {
        this.prices = new Dictionary<string, number>();
    }
    public setPrice(name: string, price: number) {
        this.prices[name] = price;
    }
    public getPrice(name: string) {
        return this.prices[name];
    }
}
