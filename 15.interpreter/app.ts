import { CurrentPricesContext } from './model/currentPricesContext';
import { GoodsPackage } from './model/goodsPackage';
import { TV } from './model/tv';

const truck = new GoodsPackage();
const tvPackage = new GoodsPackage();
const tv = new TV();
const tv2 = new TV();
const tv3 = new TV();
tvPackage.goodsInside.push(tv);
tvPackage.goodsInside.push(tv2);
truck.goodsInside.push(tvPackage);
truck.goodsInside.push(tv3);

const pricesContex = new CurrentPricesContext();
pricesContex.setPrice('TV', 300);

const totalPrice = truck.interpret(pricesContex);

console.log(totalPrice);
