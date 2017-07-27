import { GameMemento } from './gameMemento';
import { GameState } from './gameState';
export class GameOrdinator {
    private gameState = new GameState(100, 0);

    public play() {
        console.log(`Health: ${this.gameState.health}. Killed units: ${this.gameState.killedUnits}`);
        this.gameState = new GameState(this.gameState.health * 0.9, this.gameState.killedUnits + 2);
    }
    public gameSave() {
        return new GameMemento(this.gameState);
    }
    public loadGame(memento: GameMemento) {
        this.gameState = memento.getState();
    }
}
