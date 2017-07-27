import { BoxFight } from './model/boxFight';
import { ConservativePlayer } from './model/conservativePlayer';
import { RiskyPlayer } from './model/riskyPlayer';

const boxFight = new BoxFight();
const riskyPlayer = new RiskyPlayer();
const conservativePlayer = new ConservativePlayer();

boxFight.attachObserver(riskyPlayer);
boxFight.attachObserver(conservativePlayer);

boxFight.nextRound();
boxFight.nextRound();
boxFight.nextRound();
boxFight.nextRound();
boxFight.nextRound();
