import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { carsList } from "@utils/mocks/carsList";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("Should be able to list all available Cars.", async () => {
    carsList.map(async (car) => {
      await carsRepositoryInMemory.create(car);
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars.length).toEqual(5);
  });

  it("Should be able to list all available Cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A1",
      description: "Carro Com Espaço",
      daily_rate: 140,
      license_plate: "DEF1A23",
      fine_amount: 100,
      brand: "Audi",
      category_id: "099296df-89f4-40d3-ad45-e52507343e99",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Audi A1",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available Cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A1",
      description: "Carro Com Espaço",
      daily_rate: 140,
      license_plate: "DEF1A23",
      fine_amount: 100,
      brand: "Audi",
      category_id: "099296df-89f4-40d3-ad45-e52507343e99",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Audi",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available Cars by Category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A1",
      description: "Carro Com Espaço",
      daily_rate: 140,
      license_plate: "DEF1A23",
      fine_amount: 100,
      brand: "Audi",
      category_id: "099296df-89f4-40d3-ad45-e52507343e99",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "099296df-89f4-40d3-ad45-e52507343e99",
    });

    expect(cars).toEqual([car]);
  });
});
