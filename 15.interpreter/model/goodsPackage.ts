import { CurrentPricesContext } from './currentPricesContext';
import { Goods } from './goods';

export class GoodsPackage extends Goods {
    public goodsInside: Goods[];
    constructor() {
        super();
        this.goodsInside = [];
    }
    public interpret(priceContext: CurrentPricesContext): number {
        let totalSum = 0;
        this.goodsInside.forEach(c => {
            totalSum += c.interpret(priceContext);
        });

        return totalSum;
    }
}
