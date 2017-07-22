import { RobotBombDefuser } from './model/robotBombDefuser';
import { RobotBombDefuserProxy } from './model/robotBombDefuserProxy';

let opNum = 0;

try {
    const proxy = new RobotBombDefuserProxy(41);
    proxy.walkForward(100);
    opNum++;
    proxy.turnLeft();
    opNum++;
    proxy.walkForward(50);
    opNum++;
    proxy.defuseBomb();
    opNum++;
} catch (error) {
    console.log(error);
    planB(opNum);
}

function planB(operNum: number) {
    const humanOperatingRobotDirectly = new RobotBombDefuser();
    switch (operNum) {
        case 1:
            humanOperatingRobotDirectly.walkForward(100);
            operNum++;
        case 2:
            humanOperatingRobotDirectly.turnLeft();
            operNum++;
        case 3:
            humanOperatingRobotDirectly.walkForward(50);
            operNum++;
        case 4:
            humanOperatingRobotDirectly.defuseBomb();
            operNum++;
        default:
            break;
    }
}
