import * as console from 'console';
import { Floor } from './floor';
import { OfficeBuilding } from './officeBuilding';
import { Room } from './room';
import { IVisitor } from './visitor.interface';
export class ElectricitySystemValidator implements IVisitor {
    public visit(element: Room | Floor | OfficeBuilding) {
        if (element instanceof Room) {
            const electricityState = Math.random() > 0.3 ? 'Good' : 'Bad';
            console.log(`Main electric shield in building ${element.num} is in ${electricityState} state`);
        } else if (element instanceof Floor) {
            console.log('Diagnosting electricity on floor');
        } else if (element instanceof OfficeBuilding) {
            console.log('Diagnosting electricity on building');
        }
    }
}
