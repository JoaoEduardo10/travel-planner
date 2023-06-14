import { Openai } from "../../../src/openai/openai";
import { Travel_itinerary } from "../../../src/services/travel_itinerary/travel-itinerary";

describe("Travel_itinerary", () => {
  it("should return a travel plan", async () => {
    const openaiTravelResponse = new Openai();

    const travel = new Travel_itinerary(openaiTravelResponse);

    const travel_itinerary = await travel.getTravel_itinerary({
      destination: "teresina-pi",
      end_date: "10/11/2022",
      start_date: "20/11/2022",
    });

    expect(travel_itinerary).toBeTruthy();
  }, 20000);
});
