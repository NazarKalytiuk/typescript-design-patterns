import { RobotBombDefuser } from './robotBombDefuser';

export class RobotBombDefuserProxy extends RobotBombDefuser {
    private robotBombDefuser: RobotBombDefuser;
    private communivationWaveLenght: number;
    private connectionAttempts = 3;

    constructor(communivationWaveLenght: number) {
        super();
        this.communivationWaveLenght = communivationWaveLenght;
    }

    public turnRight() {
        this.ensureConnectedWithRobot();
        this.robotBombDefuser.turnRight();
    }

    public turnLeft() {
        this.ensureConnectedWithRobot();
        this.robotBombDefuser.turnLeft();
    }

    public defuseBomb() {
        this.ensureConnectedWithRobot();
        this.robotBombDefuser.defuseBomb();
    }

    public walkForward(steps: number) {
        this.ensureConnectedWithRobot();
        this.robotBombDefuser.walkForward(steps);
    }

    private ensureConnectedWithRobot() {
        if (Math.random() > 0.6) {
            throw new Error('Connection failed...');
        }
        if (!this.robotBombDefuser) {
            this.robotBombDefuser = new RobotBombDefuser();
            this.robotBombDefuser.connectWireless(this.communivationWaveLenght);
        }
    }
}
