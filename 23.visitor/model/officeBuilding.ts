import { IElement } from './element.interface';
import { Floor } from './floor';
import { IVisitor } from './visitor.interface';
export class OfficeBuilding implements IElement {
    public floors: Floor[] = [];
    public accept(visitor: IVisitor) {
        visitor.visit(this);
        this.floors.forEach(c => {
            c.accept(visitor);
        });
    }
}
