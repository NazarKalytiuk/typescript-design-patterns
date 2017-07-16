import { Bear } from './model/bear';
import { Cat } from './model/cat';
import { TeddyBear } from './model/teddyBear';
import { TeddyCat } from './model/teddyCat';
import { ToyFactory } from './toyFactory';

export class TeddyToyFactory extends ToyFactory {
    public getBear(): Bear {
        return new TeddyBear();
    }
    public getCat(): Cat {
        return new TeddyCat();
    }
}
