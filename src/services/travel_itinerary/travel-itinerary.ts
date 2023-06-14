import { Travel_itineraryDTO } from "../../interface/travelDTO";
import { Openai } from "../../database/openai";
import { Prompt } from "./prompt";
import { ITravel_itinerary } from "./protocols";

export class Travel_itinerary implements ITravel_itinerary {
  private prompt: Prompt;

  constructor(private readonly openaiClient: Openai) {
    this.prompt = new Prompt();
  }

  async getTravel_itinerary(params: Travel_itineraryDTO): Promise<string> {
    const { destination, end_date, start_date } = params;

    const prompt = this.prompt.getTravelItineraryText(
      destination,
      start_date,
      end_date
    );

    const travel_itinerary = await this.openaiClient.getOpenaiResponseText(
      prompt
    );

    return travel_itinerary;
  }
}
