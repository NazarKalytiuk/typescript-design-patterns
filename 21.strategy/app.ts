import { MySelf } from './model/myself';
import { RainWearingStrategy } from './model/rainWearingStrategy';

const me = new MySelf();
me.goOutside();
me.changeStrategy(new RainWearingStrategy());
me.goOutside();
