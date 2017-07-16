import { Bear } from './model/bear';
import { Cat } from './model/cat';
import { WoodenBear } from './model/woodenBear';
import { WoodenCat } from './model/woodenCat';
import { ToyFactory } from './toyFactory';

export class WoodenToyFactory extends ToyFactory {
    public getBear(): Bear {
        return new WoodenBear();
    }
    public getCat(): Cat {
        return new WoodenCat();
    }
}
