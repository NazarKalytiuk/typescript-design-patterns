import { CurrentPricesContext } from './currentPricesContext';
export abstract class Goods {
    public abstract interpret(priceContext: CurrentPricesContext): number;
}
