import { BoxFight } from './boxFight';
import { IObserver } from './observer.interface';
import { ISubject } from './subject.unterface';
export class RiskyPlayer implements IObserver {
    public boxerToPutMoneyOn: string;

    public update(subject: ISubject) {
        const boxFight = (subject as BoxFight);
        // tslint:disable-next-line:prefer-conditional-expression
        if (boxFight.boxerAScore < boxFight.boxerBScore) {
            this.boxerToPutMoneyOn = 'I put on boxer A, if he win I get more!";';
        } else {
            this.boxerToPutMoneyOn = 'I put on boxer B, if he win I get more!";';
        }
        console.log(`RISKYPLAYER: ${this.boxerToPutMoneyOn}`);
    }
}
