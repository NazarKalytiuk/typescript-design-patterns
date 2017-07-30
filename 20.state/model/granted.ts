import { Order } from './order';
import { OrderState } from './orderState';
import { Product } from './product';
export class Granted extends OrderState {
    constructor(order: Order) {
        super(order);
    }
    public ship() {
        console.log('Shipping...');
    }
}
