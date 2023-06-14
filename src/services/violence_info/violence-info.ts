import { Violence_infoDTO } from "../../interface/travelDTO";
import { Openai } from "../../openai/openai";
import { Prompt } from "./prompt";
import { IViolence_info } from "./protocols";

export class Violence_info implements IViolence_info {
  private prompt = new Prompt();

  constructor(private readonly openaiTravelResponse: Openai) {}

  async getViolence_info(params: Violence_infoDTO): Promise<string> {
    const { destination, start_date } = params;

    const prompt = this.prompt.getWeatherText(destination, start_date);

    const violence_info = await this.openaiTravelResponse.getOpenaiResponseText(
      prompt
    );

    return violence_info;
  }
}
