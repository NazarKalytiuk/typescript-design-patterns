import * as fs from 'fs';
import { Dictionary } from '../../lib/dictionary';
import { Goblin } from './goblin';

export class UnitImagesFactory {
    public static images: Dictionary<string, Buffer> = new Dictionary<string, Buffer>();

    public static createGoblinImage() {
        if (!this.images.containsKey(Goblin.name)) {
            this.images.add(Goblin.name, fs.readFileSync('./assets/goblin.png'));
        }

        return this.images[Goblin.name];
    }
}
