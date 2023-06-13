import { BestWayTravelDTO } from "../../interface/travelDTO";

export class Prompt {
  getWeatherText(params: BestWayTravelDTO): string {
    const { destination, origin, start_date } = params;

    return `Sei que Voçê é uma inteigencia artificial.mas voçê vai se parsar por um especialista em viagens.
    vou viajar de ${origin} ate ${destination} no dia ${start_date},
    pode me dizer como é melhor maneira de viajar? , 
    consuntando dados historicos!`;
  }
}
