import { WeatherDTO } from "../../interface/travelDTO";
import { Openai } from "../../database/openai";
import { Prompt } from "./prompt";
import { IWeather } from "./protocols";

export class Weather implements IWeather {
  private prompt: Prompt;

  constructor(private readonly openaiClient: Openai) {
    this.prompt = new Prompt();
  }

  async getWeather(params: WeatherDTO): Promise<string> {
    const { destination, start_date } = params;

    const prompt = this.prompt.getWeatherText(destination, start_date);

    const weather = await this.openaiClient.getOpenaiResponseText(prompt);

    return weather;
  }
}
