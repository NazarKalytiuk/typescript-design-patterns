import { Soldier } from './soldier';
export class Hero extends Soldier {
    constructor(name: string) {
        super(name);
        this.maxHealth = 500;
    }
}
