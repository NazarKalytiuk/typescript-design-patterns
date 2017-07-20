import { BrickWallCreator } from './model/brickWallCreator';
import { BuildingCompany } from './model/buildingCompany';
import { SlabWallCreator } from './model/slabWallCreator';

const brickWallCreator = new BrickWallCreator();
const slabWallCreator = new SlabWallCreator();

const builingCompany = new BuildingCompany();

builingCompany.wallCreator = brickWallCreator;

builingCompany.buildFoundation();
builingCompany.buildRoom();
builingCompany.buildRoof();

builingCompany.wallCreator = slabWallCreator;

builingCompany.buildFoundation();
builingCompany.buildRoom();
builingCompany.buildRoof();
