import { GameState } from './gameState';
export class GameMemento {
    private readonly gameState: GameState;
    constructor(state: GameState) {
        this.gameState = state;
    }
    public getState() {
        return this.gameState;
    }
}
