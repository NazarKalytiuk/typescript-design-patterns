import { HotelBookingSystem } from './hotelBookingSystem';
import { SkiRent } from './skiRent';
import { SkiResoltTicketSystem } from './skiResoltTicketSystem';
export class SkiResortFacade{
    private skiRent: SkiRent;
    private skiResoltTicketSystem: SkiResoltTicketSystem;
    private hotelBookingSystem: HotelBookingSystem;

    constructor() {
        this.skiRent = new SkiRent();
        this.skiResoltTicketSystem = new SkiResoltTicketSystem();
        this.hotelBookingSystem = new HotelBookingSystem();
    }

    public haveGoodRest(height: number, weight: number, feetSize: number, skierLevel: number, roomQuality: number) {
        const skiPrice = this.skiRent.rentSki(weight, skierLevel);
        const skiBootPrice = this.skiRent.rentBoots(feetSize, skierLevel);
        const polePrice = this.skiRent.rentPole(height);

        const oneDayTicketPrice = this.skiResoltTicketSystem.buyOneDayTicket();

        const hotelPrice = this.hotelBookingSystem.bookRoom(5);

        return skiPrice + skiBootPrice + polePrice + oneDayTicketPrice + hotelPrice;
    }

    public haveRestWithOwnSkies() {
        const oneDayTicketPrice = this.skiResoltTicketSystem.buyOneDayTicket();

        return oneDayTicketPrice;
    }
}
