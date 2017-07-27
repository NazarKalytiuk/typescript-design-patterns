import { BodyPart } from './bodyPart';
import { Brain } from './brain';
export class Hand extends BodyPart {
    private _isHurt: boolean;
    public get isHurt() {
        return this._isHurt;
    }
    constructor(brain: Brain) {
        super(brain);
    }
    public kick() {
        console.log('HAND: kick');
    }
    public doesItHurt() {
        this._isHurt = Math.random() > 0.5;
        this.changed();
    }
}
