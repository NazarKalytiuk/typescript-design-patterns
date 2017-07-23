export abstract class CafeVisitor {
    public cafeVisitor?: CafeVisitor;
    public food: string;
    protected constructor(food: string, cafeVisitor?: CafeVisitor) {
        this.cafeVisitor = cafeVisitor;
        this.food = food;
    }
    public handleFood(food: string) {
        if (this.cafeVisitor) {
            this.cafeVisitor.handleFood(food);
        }
    }
}
