import { IBuildingCompany } from './buildingCompany.interface';
import { IWallCreator } from './wallCreator.interface';

export class BuildingCompany implements IBuildingCompany {
    public wallCreator: IWallCreator;
    public buildFoundation(): void {
        console.log('Foundation is built');
    }

    public buildRoom() {
        this.wallCreator.buildWall();
        this.wallCreator.buildWallWithDoor();
        this.wallCreator.buildWall();
        this.wallCreator.buildWall();
        console.log('Room is built');
    }

    public buildRoof() {
        console.log('Roof is built');
    }
}
