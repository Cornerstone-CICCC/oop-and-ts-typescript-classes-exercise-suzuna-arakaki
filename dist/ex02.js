"use strict";
/**
 * Exercise 2: Abstract Class
 *
 * Instructions:
 * - Create an abstract class `Appliance`:
 *   - public property: `brand` (string)
 *   - concrete method `turnOn()` logs turning on
 *   - abstract method `energyConsumption()` that returns kWh (number)
 * - Create subclasses `WashingMachine` and `Refrigerator` implementing energyConsumption and returns the kWh consumption (WashingMachine: 2.5, Refrigerator: 1.2)
 */
class Appliance {
    constructor(brand) {
        this.brand = brand;
    }
    turnOn() {
        console.log(`${this.brand} is now ON`);
    }
}
class WashingMachine extends Appliance {
    constructor(brand) {
        super(brand);
    }
    energyConsumption() {
        return 2.5;
    }
}
class Refrigerator extends Appliance {
    constructor(brand) {
        super(brand);
    }
    energyConsumption() {
        return 1.2;
    }
}
// Driver code
const wm = new WashingMachine("LG");
wm.turnOn(); // LG is now ON
console.log("Energy:", wm.energyConsumption(), "kWh"); // Energy: 2.5 kWh
const fridge = new Refrigerator("Samsung");
fridge.turnOn(); // Samsung is now ON
console.log("Energy:", fridge.energyConsumption(), "kWh"); // Energy: 1.2 kWh
