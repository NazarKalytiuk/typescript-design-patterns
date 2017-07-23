import { CafeVisitor } from './cafeVisitor';
export class FriendCafeVisitor extends CafeVisitor {
    constructor(food: string, cafeVisitor?: CafeVisitor) {
        super(food, cafeVisitor);
    }
    public handleFood(food: string) {
        if (this.food === food) {
            console.log(`I love my ${food}`);
        } else {
            super.handleFood(food);
        }
    }
}
