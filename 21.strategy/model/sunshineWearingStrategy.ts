import { IWearingStrategy } from './wearingStrategy.interface';
export class SunshineWearingStrategy implements IWearingStrategy {
    public getClothers(): string {
        return 'T-Shirt';
    }

    public getAccessories(): string {
        return 'Sunglasses';
    }
}
