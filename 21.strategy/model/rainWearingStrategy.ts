import { IWearingStrategy } from './wearingStrategy.interface';
export class RainWearingStrategy implements IWearingStrategy {
    public getClothers(): string {
        return 'Coat';
    }

    public getAccessories(): string {
        return 'Umbrella';
    }
}
