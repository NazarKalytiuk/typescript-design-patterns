import { Adapter } from './model/adapter';
import { Consumer } from './model/consumer';
import { NewElectricitySystem } from './model/newElectricitySystem';
import { OldElectricitySystem } from './model/oldElecticitySystem';

const newSystem = new NewElectricitySystem();

Consumer.chargeNoteBook(newSystem);

const oldSystem = new OldElectricitySystem();
const adapter = new Adapter(oldSystem);

Consumer.chargeNoteBook(adapter);
