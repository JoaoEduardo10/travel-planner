import { WeatherDTO } from "../../interface/travelDTO";
import { OpenaiTravelResponse } from "../../openai/openai-travel-response";
import { Prompt } from "./prompt";
import { IWeather } from "./protocols";

export class Weather implements IWeather {
  private prompt = new Prompt();

  constructor(private readonly openaiTravelResponse: OpenaiTravelResponse) {}

  async getWeather(params: WeatherDTO): Promise<string> {
    const { destination, start_date } = params;

    const prompt = this.prompt.getWeatherText(destination, start_date);

    const weather = await this.openaiTravelResponse.getTravelResponse(prompt);

    return weather;
  }
}
