import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppErrors";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create a Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new Car", async () => {
    const car = await createCarUseCase.execute({
      name: "Test Name",
      description: "Test Description",
      daily_rate: 100,
      license_plate: "ABC1A23",
      fine_amount: 60,
      brand: "Brand Test",
      category_id: "Some Category Id",
    });

    expect(car).toHaveProperty("id");
  });

  it("Should not be able to create a car with the same license plate number", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Test Car 1",
        description: "Test Description",
        daily_rate: 100,
        license_plate: "ABC1A23",
        fine_amount: 60,
        brand: "Brand Test",
        category_id: "Some Category Id",
      });

      await createCarUseCase.execute({
        name: "Test Car 2",
        description: "Test Description",
        daily_rate: 100,
        license_plate: "ABC1A23",
        fine_amount: 60,
        brand: "Brand Test",
        category_id: "Some Category Id",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to create a new Car with the property 'Available' true by default.", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Test Description",
      daily_rate: 100,
      license_plate: "ABC1B23",
      fine_amount: 60,
      brand: "Brand Test",
      category_id: "Some Category Id",
    });

    expect(car.available).toBe(true);
  });
});
