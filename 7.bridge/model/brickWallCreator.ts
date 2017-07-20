import { IWallCreator } from './wallCreator.interface';

export class BrickWallCreator implements IWallCreator {
    public buildWall() {
        console.log('Built brick wall');
    }

    public buildWallWithDoor() {
        console.log('Built brick wall with door');
    }
}
