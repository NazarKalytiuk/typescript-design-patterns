import { ICommand } from './model/command.interface';
import { Customer } from './model/customer';
import { HeroDeveloper } from './model/heroDeveloper';
import { HeroDeveloperCommand } from './model/heroDeveloperCommand';
import { Team } from './model/team';
import { YouAsProjectManagerCommand } from './model/youAsProjectManagesCommand';

const customer = new Customer();

const team = new Team();
const requirements = 'cool web site';
const commandX: ICommand = new YouAsProjectManagerCommand(team, requirements);
customer.addCommand(commandX);

const heroDev = new HeroDeveloper();
const commandY = new HeroDeveloperCommand(heroDev, 'A');
customer.addCommand(commandY);

customer.signContractWithBoss();
