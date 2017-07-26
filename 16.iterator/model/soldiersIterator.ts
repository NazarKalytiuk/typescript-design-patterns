import { Army } from './army';
import { Soldier } from './soldier';

export class SoldiersIterator {
    private readonly army: Army;
    private heroIsIterated: boolean;
    private currentGroup: number;
    private currentGroupSoldier: number;

    constructor(army: Army) {
        this.army = army;
        this.heroIsIterated = false;
        this.currentGroup = 0;
        this.currentGroupSoldier = 0;
    }

    public hasNext(): boolean {
        if (!this.heroIsIterated) {
            return true;
        }
        if (this.currentGroup < this.army.groups.length) {
            return true;
        }
        if (this.currentGroup === this.army.groups.length - 1) {
            if (this.currentGroupSoldier <= this.army.groups[this.currentGroup].soldiers.length) {
                return true;
            }
        }

        return false;
    }

    public next(): Soldier {
        let nextSoldier: Soldier;
        if (this.currentGroup < this.army.groups.length) {
            if (this.currentGroupSoldier < this.army.groups[this.currentGroup].soldiers.length) {
                nextSoldier = this.army.groups[this.currentGroup].soldiers[this.currentGroupSoldier];
                this.currentGroupSoldier++;
            } else {
                this.currentGroup++;
                this.currentGroupSoldier = 0;

                return this.next();
            }
        } else if (!this.heroIsIterated) {
            this.heroIsIterated = true;

            return this.army.hero;
        } else {
            throw new Error('End of collection');
        }

        return nextSoldier;
    }
}
