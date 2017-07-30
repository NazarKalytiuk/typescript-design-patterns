import { Floor } from './floor';
import { OfficeBuilding } from './officeBuilding';
import { Room } from './room';
import { IVisitor } from './visitor.interface';
export class PlumbingSystemValidator implements IVisitor {
    public visit(element: Room | Floor | OfficeBuilding) {
        if (element instanceof OfficeBuilding) {
            const state = Math.random() > 0.3 ? 'Good' : 'Bad';
            console.log(`Plumbing state of building probably is in Good condition, since builing is New.`);
        }
    }
}
