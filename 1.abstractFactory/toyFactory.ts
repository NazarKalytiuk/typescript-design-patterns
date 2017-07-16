import { Bear } from './model/bear';
import { Cat } from './model/cat';

export abstract class ToyFactory {
    public abstract getBear(): Bear;
    public abstract getCat(): Cat;
}
