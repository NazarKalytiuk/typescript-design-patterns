import { CurrentPricesContext } from './currentPricesContext';
import { Goods } from './goods';

export class TV extends Goods {
    public interpret(priceContext: CurrentPricesContext): number {
        const price = priceContext.getPrice('TV');

        return price;
    }
}
