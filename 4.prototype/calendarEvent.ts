import { CalendarPrototype } from './calendarPrototype';

export class CalendarEvent extends CalendarPrototype {
    public clone(): CalendarEvent {
        const obj = new CalendarEvent();

        // tslint:disable-next-line:prefer-object-spread
        return Object.assign(obj, this);
    }
}
