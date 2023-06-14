import { BestWayTravelDTO } from "../../interface/travelDTO";
import { Openai } from "../../openai/openai";
import { Prompt } from "./prompt";
import { IBestWayTravel } from "./protocols";

export class BestWayTravel implements IBestWayTravel {
  private prompt: Prompt;

  constructor(private readonly openaiClient: Openai) {
    this.prompt = new Prompt();
  }

  async getBestWayTravel(params: BestWayTravelDTO): Promise<string> {
    const { destination, origin, start_date } = params;

    const prompt = this.prompt.getBestWayTravelText({
      destination,
      origin,
      start_date,
    });

    const bestWayTravel = await this.openaiClient.getOpenaiResponseText(prompt);

    return bestWayTravel;
  }
}
