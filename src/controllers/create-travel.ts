import { Request, Response } from "express";
import { TravelDTO } from "../interface/travelDTO";
import { CControllers } from "./protcols";
import { BestWayTravel } from "../services/best_way_travel/best_way_travel";
import { Travel_itinerary } from "../services/travel_itinerary/travel-itinerary";
import { Violence_info } from "../services/violence_info/violence-info";
import { Weather } from "../services/weather/weather";
import { Openai } from "../openai/openai";

export class TravelController implements CControllers {
  async handle(req: Request<{}, {}, TravelDTO>, res: Response): Promise<void> {
    const { destination, end_date, origin, start_date } = req.body;

    const openaiClient = new Openai();
    const Best_way_travelText = new BestWayTravel(openaiClient);
    const Travel_itineraryText = new Travel_itinerary(openaiClient);
    const WeatherResponseText = new Weather(openaiClient);
    const Violence_infoText = new Violence_info(openaiClient);

    const best_way_travel = Best_way_travelText.getBestWayTravel({
      destination,
      origin,
      start_date,
    });

    const travel_itinerary = Travel_itineraryText.getTravel_itinerary({
      destination,
      end_date,
      start_date,
    });

    const violence_info = Violence_infoText.getViolence_info({
      destination,
      start_date,
    });

    const weather = WeatherResponseText.getWeather({
      destination,
      start_date,
    });

    const [
      best_way_travelResponse,
      travel_itineraryResponse,
      weatherResponse,
      violence_infoResponse,
    ] = await Promise.all([
      best_way_travel,
      travel_itinerary,
      weather,
      violence_info,
    ]);

    const message = {
      best_way_travel: best_way_travelResponse,
      travel_itinerary: travel_itineraryResponse,
      weather: weatherResponse,
      violence_info: violence_infoResponse,
    };

    res.status(201).json(message);
  }
}
