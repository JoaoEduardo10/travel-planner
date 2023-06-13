import { Travel_itineraryDTO } from "../../interface/travelDTO";
import { OpenaiTravelResponse } from "../../openai/openai-travel-response";
import { Prompt } from "./prompt";
import { ITravel_itinerary } from "./protocols";

export class Travel_itinerary implements ITravel_itinerary {
  private prompt = new Prompt();

  constructor(private readonly openaiTravelResponse: OpenaiTravelResponse) {}

  async getTravel_itinerary(params: Travel_itineraryDTO): Promise<string> {
    const { destination, end_date, start_date } = params;

    const prompt = this.prompt.getTravel_itineraryText(
      destination,
      start_date,
      end_date
    );

    const travel_itinerary = await this.openaiTravelResponse.getTravelResponse(
      prompt
    );

    return travel_itinerary;
  }
}