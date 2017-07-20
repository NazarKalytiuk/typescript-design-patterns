import { IWallCreator } from './wallCreator.interface';

export class SlabWallCreator implements IWallCreator {
    public buildWall() {
        console.log('Built slab wall');
    }

    public buildWallWithDoor() {
        console.log('Built slab wall with door');
    }
}
