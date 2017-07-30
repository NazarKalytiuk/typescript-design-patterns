import { NewOrder } from './model/newOrder';
import { Order } from './model/order';
import { Product } from './model/product';

const beer = new Product();
beer.name = 'beer';
beer.price = 9000;

const order = new Order();
order.writeCurrentState();

order.addProduct(beer);
order.writeCurrentState();

order.ship();
order.writeCurrentState();
