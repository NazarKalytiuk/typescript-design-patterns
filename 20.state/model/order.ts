import { NewOrder } from './newOrder';
import { OrderState } from './orderState';
import { Product } from './product';
export class Order {
    private state: OrderState;
    private products: Product[] = [];
    constructor() {
        this.state = new NewOrder(this);
    }
    public setOrderState(order: OrderState) {
        this.state = order;
    }
    public writeCurrentState() {
        console.log(`Current order's state ${this.state.constructor.name}`);
    }
    public addProduct(product: Product) {
        this.products.push(product);
        this.state.addProduct(product);
    }
    public ship() {
        this.state.ship();
    }
}
