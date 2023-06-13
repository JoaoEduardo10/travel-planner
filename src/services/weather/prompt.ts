export class Prompt {
  getWeatherText(destination: string, start_date: string): string {
    return `Sei que Voçê é uma inteigencia artificial.
      mas voçê vai se parsar por um especialista em tempo.
      vou viajar para ${destination} no dia ${start_date}. 
      pode me dizer como é o clima, consuntando dados historicos?
      Quero somente a resposta direta!
    `;
  }
}
