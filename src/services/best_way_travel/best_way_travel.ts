import { BestWayTravelDTO } from "../../interface/travelDTO";
import { Openai } from "../../openai/openai";
import { Prompt } from "./prompt";
import { IBestWayTravel } from "./protocols";

export class BestWayTravel implements IBestWayTravel {
  private prompt = new Prompt();

  constructor(private readonly openaiTravelResponse: Openai) {}

  async getBestWayTravel(params: BestWayTravelDTO): Promise<string> {
    const { destination, origin, start_date } = params;

    const prompt = this.prompt.getWeatherText({
      destination,
      origin,
      start_date,
    });

    const bestWayTravel = await this.openaiTravelResponse.getOpenaiResponseText(
      prompt
    );

    return bestWayTravel;
  }
}
