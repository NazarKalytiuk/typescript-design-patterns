import { BodyPart } from './bodyPart';
import { Brain } from './brain';
export class Face extends BodyPart {
    constructor(brain: Brain) {
        super(brain);
    }
    public smile() {
        console.log('FACE: Smiling...');
    }
    public frown() {
        console.log('FACE: Frowning...');
    }
    public cry() {
        console.log('FACE: crying...');
    }
}
