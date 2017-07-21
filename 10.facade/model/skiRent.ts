export class SkiRent {
    public rentBoots(feetSize: number, skierLevel: number) {
        return `Boots: feetSize: ${feetSize}, skierLevel: ${skierLevel}`;
    }
    public rentSki(weight: number, skierLevel: number) {
        return `Ski: weight: ${weight}, skierLevel: ${skierLevel}`;
    }
    public rentPole(height: number) {
        return `Pole: height: ${height}`;
    }
}
