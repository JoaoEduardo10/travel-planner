export class Prompt {
  getTravel_itineraryText(
    destination: string,
    start_date: string,
    end_date: string
  ): string {
    return `vou viajar de ${destination} no dia ${start_date} ate ${end_date}. Por favor me sugira um roteiro de viagem para cada dia!`;
  }
}
