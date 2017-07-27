import { IObserver } from './observer.interface';
import { ISubject } from './subject.unterface';
export class BoxFight implements ISubject {
    public observers: IObserver[] = [];
    public roundNumber = 0;
    public boxerAScore = 0;
    public boxerBScore = 0;

    public attachObserver(observer: IObserver) {
        this.observers.push(observer);
    }

    public detachObserver(observer: IObserver) {
        this.observers.slice(this.observers.indexOf(observer), 1);
    }

    public notify() {
        this.observers.forEach(observer => {
            observer.update(this);
        });
    }

    public nextRound() {
        this.roundNumber++;

        this.boxerAScore += Math.round(Math.random() * 10);
        this.boxerBScore += Math.round(Math.random() * 10);

        this.notify();
    }
}
