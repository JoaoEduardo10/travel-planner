import { WeatherDTO } from "../../interface/travelDTO";
import { Openai } from "../../openai/openai";
import { Prompt } from "./prompt";
import { IWeather } from "./protocols";

export class Weather implements IWeather {
  private prompt = new Prompt();

  constructor(private readonly openaiTravelResponse: Openai) {}

  async getWeather(params: WeatherDTO): Promise<string> {
    const { destination, start_date } = params;

    const prompt = this.prompt.getWeatherText(destination, start_date);

    const weather = await this.openaiTravelResponse.getOpenaiResponseText(
      prompt
    );

    return weather;
  }
}
