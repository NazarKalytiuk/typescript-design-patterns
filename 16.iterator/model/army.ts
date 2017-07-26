import { Group } from './group';
import { Hero } from './hero';
export class Army {
    public hero: Hero;
    public groups: Group[] = [];
    constructor(hero: Hero) {
        this.hero = hero;
    }
    public addGroup(group: Group) {
        this.groups.push(group);
    }
}
