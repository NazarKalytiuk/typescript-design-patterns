import { ISubject } from './subject.unterface';
export interface IObserver {
    update(subject: ISubject);
}
