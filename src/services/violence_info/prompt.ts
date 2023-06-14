export class Prompt {
  getViolenceInfoText(destination: string, start_date: string): string {
    return `Sei que Voçê é uma inteigencia artificial.
      mas voçê vai se parsar por um especialista criminal.
      vou viajar para ${destination} no dia ${start_date}. 
      pode me dizer como é tacha de criminalidade de lá, consuntando dados historicos?
      Quero somente a resposta direta!
    `;
  }
}
