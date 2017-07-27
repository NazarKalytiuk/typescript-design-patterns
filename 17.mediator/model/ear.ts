import { BodyPart } from './bodyPart';
import { Brain } from './brain';
export class Ear extends BodyPart {
    private _sounds: string;
    constructor(brain: Brain) {
        super(brain);
    }
    public hearSomething(sounds: string) {
        this._sounds = sounds;
        this.changed();
    }
    public get sounds() {
        return this._sounds;
    }
}
