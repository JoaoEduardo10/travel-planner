import { serverTest } from "../../jest.setup";

describe("travelMiddleware", () => {
  it("should return an error for not sending the destination", async () => {
    const { body, statusCode } = await serverTest.post("/plan").send({
      end_date: "20/11/2022",
      origin: "teresina-pi",
      start_date: "10/11/2022",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "Adicione um destino!" });
  });

  it("should return an error for not sending the origin", async () => {
    const { body, statusCode } = await serverTest.post("/plan").send({
      destination: "são paulo-sp",
      end_date: "20/11/2022",
      start_date: "10/11/2022",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "Adicione uma origem!" });
  });

  it("should return an error for not sending the origin", async () => {
    const { body, statusCode } = await serverTest.post("/plan").send({
      destination: "são paulo-sp",
      end_date: "20/11/2022",
      origin: "teresina-pi",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "Adicione a data de partida!" });
  });

  it("should return an error for not sending the origin", async () => {
    const { body, statusCode } = await serverTest.post("/plan").send({
      destination: "são paulo-sp",
      origin: "teresina-pi",
      start_date: "10/11/2022",
    });

    expect(statusCode).toBe(400);
    expect(body).toEqual({ error: "Adicione a data de chegada!" });
  });
});
