export class RobotBombDefuser {
    private robotConfiguredWavelength: number;
    private _isConnected: boolean;
    public get isConnected() {
        return this._isConnected;
    }
    public connectWireless(communicationWaveLenght: number) {
        if (communicationWaveLenght === this.robotConfiguredWavelength) {
            this._isConnected = true;
        }
    }
    public walkForward(steps: number) {
        console.log(`Did ${steps} forward...\n`);
    }
    public turnRight() {
        console.log(`Turned right...\n`);
    }
    public turnLeft() {
        console.log(`Turned left...\n`);
    }
    public defuseBomb() {
        console.log(`Bomb has been defused...\n`);
    }
}
