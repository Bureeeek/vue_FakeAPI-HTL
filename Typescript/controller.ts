wimport { Autogeschaeft1 } from "./autogeschaeft1.js";
import { Autogeschaeft2 } from "./autogeschaeft2.js";
import { CarController } from "./carController.js";

const g1 = new Autogeschaeft1([
    { brand: "skoda", model: "superb" },
    { brand: "bmw", model: "330i" },
    { brand: "audi", model: "a6"}
]);

const g2 = new Autogeschaeft2([
    { brand: "tesla", model: "model x"},
    { brand: "toyota", model: "corola"},
    { brand: "honda", model: "civic"}
]);

const c1 = new CarController(g1);
c1.printAllCars();
c1.printSearch("a");

console.log("--")

const c2 = new CarController(g2);
c2.printAllCars();
c2.printSearch("model");
