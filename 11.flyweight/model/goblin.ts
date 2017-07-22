import * as fs from 'fs';
import { Unit } from './unit';
import { UnitImagesFactory } from './unitImagesFactory';

export class Goblin extends Unit {
    constructor() {
        super();
        this.name = 'goblin';
        this.health = 8;
        this.picture = fs.readFileSync('./assets/goblin.png');
        // this.picture = UnitImagesFactory.createGoblinImage();
    }
}
