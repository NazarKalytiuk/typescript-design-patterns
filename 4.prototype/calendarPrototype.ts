import { IClonable } from './iClonable';

export class CalendarPrototype implements IClonable {
    public id: string;
    public clone(): CalendarPrototype {
        const obj = new CalendarPrototype();

        // tslint:disable-next-line:prefer-object-spread
        return Object.assign(obj, this);
    }
}
