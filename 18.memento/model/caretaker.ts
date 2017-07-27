import { GameMemento } from './gameMemento';
import { GameOrdinator } from './gameOrdinator';
export class Caretaker {
    private readonly game = new GameOrdinator();
    private readonly quickSaves: GameMemento[] = [];

    public shoot() {
        this.game.play();
    }
    public f5() {
        this.quickSaves.push(this.game.gameSave());
    }
    public f9() {
        this.game.loadGame(this.quickSaves[this.quickSaves.length - 1]);
    }
}
