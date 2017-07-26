export class Soldier {
    public name: string;
    public health: number;
    protected maxHealth = 100;

    constructor(name: string) {
        this.name = name;
    }

    public treat() {
        this.health = this.maxHealth;
        console.log(this.name);
    }
}
