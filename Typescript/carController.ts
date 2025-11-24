import { CarApi } from "./carApi.ts";

export class CarController {

    constructor(private api: CarApi) {}

    printAllCars() {
        console.log("Alle Autos:", this.api.getAllCars());
    }

    printSearch(searchText: string) {
        console.log("Suchergebnis:", this.api.findCars(searchText));
    }
}