import { Configuration, OpenAIApi } from "openai";

export class GetTravelResponse {
  private openaiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  private openai = new OpenAIApi(this.openaiConfiguration);

  async handle(clientText: string): Promise<string> {
    try {
      const options = {
        model: "text-davinci-003",
        prompt: clientText,
        temperature: 1,
        max_tokens: 4000,
      };

      const response = await this.openai.createCompletion(options);
      let botResponse = "";
      response.data.choices.forEach(({ text }) => {
        botResponse += text;
      });
      return `${botResponse.trim()}`;
    } catch (error: any) {
      return `❌ OpenAI Response Error: ${error.response.data.error.message}`;
    }
  }
}
