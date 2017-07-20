import { INewElectricitySystem } from './newElectricitySystem.interface';
export class Consumer {
    public static chargeNoteBook(eSystem: INewElectricitySystem) {
        console.log(eSystem.matchWideSocket());
    }
}
