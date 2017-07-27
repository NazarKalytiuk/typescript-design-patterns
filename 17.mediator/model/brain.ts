import { BodyPart } from './bodyPart';
import { Ear } from './ear';
import { Face } from './face';
import { Hand } from './hand';
export class Brain {
    private _ear: Ear;
    private _face: Face;
    private _hand: Hand;
    public get ear() {
        return this._ear;
    }
    public get face() {
        return this._face;
    }
    public get hand() {
        return this._hand;
    }
    constructor() {
        this._ear = new Ear(this);
        this._face = new Face(this);
        this._hand = new Hand(this);
    }
    public somethingHappenedToBodyPart(bodyPart: BodyPart) {
        if (bodyPart instanceof Ear) {
            const sounds = (bodyPart as Ear).sounds;
            if (sounds === 'you are stupid') {
                this._face.frown();
                this._hand.kick();
            }
            if (sounds === 'you are cool') {
                this._face.smile();
            }
        } else if (bodyPart instanceof Hand) {
            const isHurt = this.hand.isHurt;
            if (isHurt) {
                this._face.cry();
            }
        }
    }
}
