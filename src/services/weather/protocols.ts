import { WeatherDTO } from "../../interface/travelDTO";

export interface IWeather {
  getWeather(params: WeatherDTO): Promise<string>;
}
