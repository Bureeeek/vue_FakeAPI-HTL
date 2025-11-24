import { Car } from "./car.ts";
import { CarApi } from "./carApi.ts";

export class Autogeschaeft1 implements CarApi {
    constructor(private cars: Car[]) {}

    getAllCars(): Car[] {
        return this.cars;
    }

    findCars(searchText: string): Car[] {
        const text = searchText.toLowerCase();
        return this.cars
    }
}
