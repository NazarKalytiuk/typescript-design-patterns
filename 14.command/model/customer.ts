import { ICommand } from './command.interface';
export class Customer {
    protected commands: ICommand[];
    constructor() {
        this.commands = [];
    }
    public addCommand(command: ICommand) {
        this.commands.push(command);
    }
    public signContractWithBoss() {
        this.commands.forEach(c => {
            c.execute();
        });
    }
}
