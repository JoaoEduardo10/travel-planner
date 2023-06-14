import { Openai } from "../../../src/openai/openai";
import { Weather } from "../../../src/services/weather/weather";

describe("Weather", () => {
  it("should return a weather forecast", async () => {
    const openaiTravelResponse = new Openai();

    const weather = new Weather(openaiTravelResponse);

    const weatherResponse = await weather.getWeather({
      destination: "teresina-pi",
      start_date: "10/11/2022",
    });

    expect(weatherResponse).toBeTruthy();
  });
});
