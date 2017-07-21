import { AmbulanceCar } from './model/ambulanceCar';
import { Mersedes } from './model/mersedes';

const mersedes = new Mersedes();
const dreamCar = new AmbulanceCar(mersedes);
dreamCar.go();
