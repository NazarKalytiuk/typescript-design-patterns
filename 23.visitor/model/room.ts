import { IElement } from './element.interface';
import { IVisitor } from './visitor.interface';
export class Room implements IElement{
    public num: number;
    constructor(num: number) {
        this.num = num;
    }

    public accept(visitor: IVisitor) {
        visitor.visit(this);
    }
}
