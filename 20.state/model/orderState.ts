import { Order } from './order';
import { Product } from './product';
export class OrderState {
    public order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    public addProduct(product: Product) {
        this.operationIsNotAllowed('addProduct');
    }
    public ship() {
        this.operationIsNotAllowed('ship');
    }
    private operationIsNotAllowed(opName: string) {
        console.log(`Operation ${opName} is not allowed for order state ${this.constructor.name}`);
    }
}
