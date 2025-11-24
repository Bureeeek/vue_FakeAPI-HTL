import { Car } from "./car.ts"

export interface CarApi {
    getAllCars(): Car[];
    findCars(searchText: string): Car[];
}