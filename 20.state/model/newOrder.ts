import { Granted } from './granted';
import { Order } from './order';
import { OrderState } from './orderState';
import { Product } from './product';
export class NewOrder extends OrderState {
    constructor(order: Order) {
        super(order);
    }
    public addProduct(product: Product) {
        console.log('Adding product...');
        this.order.setOrderState(new Granted(this.order));
    }
}
