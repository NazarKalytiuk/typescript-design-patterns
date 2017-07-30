import { ElectricitySystemValidator } from './model/electricitySystemValidator';
import { Floor } from './model/floor';
import { OfficeBuilding } from './model/officeBuilding';
import { PlumbingSystemValidator } from './model/plumbingSystemValidator';
import { Room } from './model/room';

const floor1 = new Floor();
floor1.rooms.push(new Room(1));
floor1.rooms.push(new Room(2));
floor1.rooms.push(new Room(3));
floor1.rooms.push(new Room(4));

const floor2 = new Floor();
floor2.rooms.push(new Room(21));
floor2.rooms.push(new Room(22));
floor2.rooms.push(new Room(23));
floor2.rooms.push(new Room(24));

const floor3 = new Floor();
floor3.rooms.push(new Room(31));
floor3.rooms.push(new Room(32));
floor3.rooms.push(new Room(33));
floor3.rooms.push(new Room(34));

const buiding = new OfficeBuilding();
buiding.floors.push(floor1);
buiding.floors.push(floor2);
buiding.floors.push(floor3);

const electricitySystemValidator = new ElectricitySystemValidator();
buiding.accept(electricitySystemValidator);

const plumbingSystemValidator = new PlumbingSystemValidator();
buiding.accept(plumbingSystemValidator);
