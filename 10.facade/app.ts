import { SkiResortFacade } from './model/skiResortFacade';

const skiResoltFacade = new SkiResortFacade();

const price = skiResoltFacade.haveGoodRest(180, 70, 42, 5, 5);

console.log(price);
