export class GameState {
    public health: number;
    public killedUnits: number;

    constructor(health: number, killedUnits: number) {
        this.health = health;
        this.killedUnits = killedUnits;
    }
}
