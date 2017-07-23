import { ICommand } from './command.interface';
import { HeroDeveloper } from './heroDeveloper';
export class HeroDeveloperCommand implements ICommand {
    public projectName: string;
    protected heroDeveloper: HeroDeveloper;
    constructor(heroDeveloper: HeroDeveloper, projectName: string) {
        this.heroDeveloper = heroDeveloper;
        this.projectName = projectName;
    }

    public execute(): void {
        this.heroDeveloper.doAllHardWork(this.projectName);
    }
}
