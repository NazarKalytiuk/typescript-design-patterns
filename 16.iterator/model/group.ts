import { Soldier } from './soldier';
export class Group {
    public soldiers: Soldier[] = [];
    public addSoldier(soldier: Soldier) {
        this.soldiers.push(soldier);
    }
}
