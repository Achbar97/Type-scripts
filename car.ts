// car.ts

// Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void; // method that returns void and logs "Engine started"
}

// Implement the Car class that implements Vehicle interface
class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of Car
const myCar = new Car("Honda", "Civic", 2022);

// Call the start method
myCar.start(); // Logs: Car engine started
