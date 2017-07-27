import { IObserver } from './observer.interface';
export interface ISubject{
    attachObserver(observer: IObserver);
    detachObserver(observer: IObserver);
    notify();
}
