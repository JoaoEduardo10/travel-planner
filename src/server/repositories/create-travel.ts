import { TravelDTO } from "../../interface/travelDTO";
import { Openai } from "../../database/openai";
import { BestWayTravel } from "../../services/best_way_travel/best_way_travel";
import { Travel_itinerary } from "../../services/travel_itinerary/travel-itinerary";
import { Violence_info } from "../../services/violence_info/violence-info";
import { Weather } from "../../services/weather/weather";
import { ITravelRepository } from "./protocols";

export class TravelRepository implements ITravelRepository {
  private best_way_travel: BestWayTravel;
  private violence_info: Violence_info;
  private weather: Weather;
  private travel_itinerary: Travel_itinerary;

  constructor(private readonly openaiClient: Openai) {
    this.best_way_travel = new BestWayTravel(this.openaiClient);
    this.violence_info = new Violence_info(this.openaiClient);
    this.weather = new Weather(this.openaiClient);
    this.travel_itinerary = new Travel_itinerary(this.openaiClient);
  }

  getTravelTextPromise(params: TravelDTO) {
    const { destination, end_date, origin, start_date } = params;

    const best_way_travelPromise = this.best_way_travel.getBestWayTravel({
      destination,
      origin,
      start_date,
    });

    const violence_infoPromise = this.violence_info.getViolence_info({
      destination,
      start_date,
    });

    const weatherPromise = this.weather.getWeather({ destination, start_date });

    const travel_itineraryPromise = this.travel_itinerary.getTravel_itinerary({
      destination,
      end_date,
      start_date,
    });

    return {
      best_way_travelPromise,
      violence_infoPromise,
      weatherPromise,
      travel_itineraryPromise,
    };
  }
}
