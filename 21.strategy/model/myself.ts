import * as console from 'console';
import { SunshineWearingStrategy } from './sunshineWearingStrategy';
import { IWearingStrategy } from './wearingStrategy.interface';
export class MySelf {
    private wearingStrategy: IWearingStrategy = new SunshineWearingStrategy();
    public changeStrategy(newStrategy: IWearingStrategy) {
        this.wearingStrategy = newStrategy;
    }
    public goOutside() {
        const clothers = this.wearingStrategy.getClothers();
        const accessories = this.wearingStrategy.getAccessories();
        console.log(`Today I wore ${clothers} and took ${accessories}`);
    }
}
