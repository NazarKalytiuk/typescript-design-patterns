import { IElement } from './element.interface';
import { Room } from './room';
import { IVisitor } from './visitor.interface';
export class Floor implements IElement {
    public rooms: Room[] = [];
    public accept(visitor: IVisitor) {
        visitor.visit(this);
        this.rooms.forEach(c => {
            c.accept(visitor);
        });
    }
}
