import { OpenaiTravelResponse } from "../../../src/openai/openai-travel-response";
import { BestWayTravel } from "../../../src/services/best_way_travel/best_way_travel";

describe("Best_way_travel", () => {
  it("should come back to the best way to travel", async () => {
    const openaiTravelResponse = new OpenaiTravelResponse();

    const best_way_travel = new BestWayTravel(openaiTravelResponse);

    const response = await best_way_travel.getBestWayTravel({
      destination: "teresina-pi",
      origin: "fortaleza",
      start_date: "10/11/2022",
    });

    expect(response).toBeTruthy();
  });
});
