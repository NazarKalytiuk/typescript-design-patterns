import { CalendarEvent } from './calendarEvent';

const obj = new CalendarEvent();
obj.id = '2';

const obj2 = obj.clone();
obj.id = '3';
console.log(obj);
console.log(obj2);
