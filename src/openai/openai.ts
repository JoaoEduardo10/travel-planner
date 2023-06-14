import { Configuration, OpenAIApi } from "openai";

export class Openai {
  private openaiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  private openai = new OpenAIApi(this.openaiConfiguration);

  async getOpenaiResponseText(clientText: string): Promise<string> {
    try {
      const options = {
        model: "text-davinci-003",
        prompt: clientText,
        temperature: 1,
        max_tokens: 4000,
      };

      const openaiResponse = await this.openai.createCompletion(options);

      let chatResponse = "";

      openaiResponse.data.choices.forEach(({ text }) => {
        chatResponse += text;
      });

      return `${chatResponse.trim()}`;
    } catch (error: any) {
      return `❌ OpenAI Response Error: ${error.message}`;
    }
  }
}
