import { serverTest } from "./jest.setup";

describe("server Travel-Planner", () => {
  it("should return all travelogue with status code 201", async () => {
    const { body, statusCode } = await serverTest.post("/plan").send({
      destination: "são paulo-sp",
      end_date: "20/11/2022",
      origin: "teresina-pi",
      start_date: "10/11/2022",
    });

    expect(statusCode).toBe(201);
    expect(body).toBeTruthy();
  });
});
