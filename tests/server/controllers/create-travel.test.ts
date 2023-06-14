import { TravelController } from "../../../src/server/controllers/create-travel";
import { TravelRepository } from "../../../src/server/repositories/create-travel";
import { Openai } from "../../../src/database/openai";
import { TravelDTO } from "../../../src/interface/travelDTO";

export interface IMockReq {
  req: {
    body: TravelDTO;
  };
}

const MockReq: any = {
  body: {
    destination: "New York-EUA",
    start_date: "10/07/2021",
    end_date: "20/07/2021",
    origin: "teresina-pi",
  },
};

describe("TravelController", () => {
  it("should return all travelogue with status code 201", async () => {
    const openaiClient = new Openai();

    const travelRepositories = new TravelRepository(openaiClient);

    const travelController = new TravelController(travelRepositories);

    const { body, statusCode } = await travelController.handle(MockReq);

    expect(statusCode).toBe(201);
    expect(body).toBeTruthy();
  });
});
