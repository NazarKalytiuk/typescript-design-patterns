import { Floor } from './floor';
import { OfficeBuilding } from './officeBuilding';
import { Room } from './room';
export interface IVisitor {
    visit(element: Room | Floor | OfficeBuilding);
}
