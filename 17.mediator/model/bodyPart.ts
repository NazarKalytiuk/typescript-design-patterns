import { Brain } from './brain';
export class BodyPart {
    private readonly brain: Brain;
    constructor(brain: Brain) {
        this.brain = brain;
    }
    public changed() {
        this.brain.somethingHappenedToBodyPart(this);
    }
}
