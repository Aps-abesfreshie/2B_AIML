class Vehicle {
    constructor(vehicleNo, driverName, distance) {
        this.vehicleNo = vehicleNo;
        this.driverName = driverName;
        this.distance = distance;
    }

    // Base class method
    calculateFare() {
        return 0;
    }

    // Static method
    static platformName() {
        console.log("Booking Platform: ABC Cab Services");
    }
}


// Derived class Car
class Car extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    // Method overriding
    calculateFare() {
        return this.distance * 15;
    }
}


// Derived class Bike
class Bike extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    // Method overriding
    calculateFare() {
        return this.distance * 8;
    }
}


// Creating objects
let car = new Car("CAR101", "Rahul", 20);
let bike = new Bike("BIKE202", "Amit", 20);


// Display common platform name
Vehicle.platformName();


// Calculate fares
console.log("Car Vehicle No:", car.vehicleNo);
console.log("Driver Name:", car.driverName);
console.log("Distance:", car.distance, "km");
console.log("Car Fare: Rs.", car.calculateFare());

console.log();

console.log("Bike Vehicle No:", bike.vehicleNo);
console.log("Driver Name:", bike.driverName);
console.log("Distance:", bike.distance, "km");
console.log("Bike Fare: Rs.", bike.calculateFare());