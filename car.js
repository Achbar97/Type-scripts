// car.ts
// Implement the Car class that implements Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of Car
var myCar = new Car("Honda", "Civic", 2022);
// Call the start method
myCar.start(); // Logs: Car engine started
