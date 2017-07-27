import { BoxFight } from './boxFight';
import { IObserver } from './observer.interface';
import { ISubject } from './subject.unterface';

export class ConservativePlayer implements IObserver {
    public boxerToPutMoneyOn: string;

    public update(subject: ISubject) {
        const boxFight = (subject as BoxFight);
        // tslint:disable-next-line:prefer-conditional-expression
        if (boxFight.boxerAScore < boxFight.boxerBScore) {
            this.boxerToPutMoneyOn = 'I put on boxer B, better be safe!';
        } else {
            this.boxerToPutMoneyOn = 'I put on boxer A, better be safe!';
        }
        console.log(`CONSERVATIVEPLAYER: ${this.boxerToPutMoneyOn}`);
    }
}
