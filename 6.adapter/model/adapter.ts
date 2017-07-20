import { INewElectricitySystem } from './newElectricitySystem.interface';
import { OldElectricitySystem } from './oldElecticitySystem';
export class Adapter implements INewElectricitySystem {
    private readonly adaptee: OldElectricitySystem;
    constructor(adaptee: OldElectricitySystem) {
        this.adaptee = adaptee;
    }
    public matchWideSocket(): string {
        return this.adaptee.matchThinSocket();
    }
}
