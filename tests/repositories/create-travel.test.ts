import { Openai } from "../../src/database/openai";
import { TravelRepository } from "../../src/server/repositories/create-travel";

describe("TravelRepository", () => {
  it("should return trip text promise", () => {
    const openai = new Openai();

    const travelRepository = new TravelRepository(openai);

    const {
      best_way_travelPromise,
      travel_itineraryPromise,
      violence_infoPromise,
      weatherPromise,
    } = travelRepository.getTravelTextPromise({
      destination: "são paulo-sp",
      end_date: "20/11/2022",
      origin: "teresina-pi",
      start_date: "10/11/2022",
    });

    expect(best_way_travelPromise).toBeTruthy();
    expect(travel_itineraryPromise).toBeTruthy();
    expect(violence_infoPromise).toBeTruthy();
    expect(weatherPromise).toBeTruthy();
  });
});
