import { Army } from './model/army';
import { Group } from './model/group';
import { Hero } from './model/hero';
import { Soldier } from './model/soldier';
import { SoldiersIterator } from './model/soldiersIterator';

const hero = new Hero('hero');
const army = new Army(hero);

const groupA = new Group();
for (let i = 0; i < 10; i++) {
    groupA.addSoldier(new Soldier(`GroupA Soldier #${i}`));
}
const groupB = new Group();
for (let i = 0; i < 20; i++) {
    groupA.addSoldier(new Soldier(`GroupB Soldier #${i}`));
}
const groupC = new Group();
for (let i = 0; i < 30; i++) {
    groupA.addSoldier(new Soldier(`GroupC Soldier #${i}`));
}

army.addGroup(groupA);
army.addGroup(groupB);
army.addGroup(groupC);

const iterator = new SoldiersIterator(army);

while (iterator.hasNext()) {
    console.log(iterator.next());
}
