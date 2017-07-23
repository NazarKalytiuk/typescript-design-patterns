import { ICommand } from './command.interface';
import { Team } from './team';
export class YouAsProjectManagerCommand implements ICommand {
    protected team: Team;
    protected requirements: string;
    constructor(team: Team, requirements: string) {
        this.team = team;
        this.requirements = requirements;
    }

    public execute(): void {
        this.team.completeProject(this.requirements);
    }
}
