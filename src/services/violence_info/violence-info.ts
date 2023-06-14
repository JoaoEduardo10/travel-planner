import { Violence_infoDTO } from "../../interface/travelDTO";
import { Openai } from "../../database/openai";
import { Prompt } from "./prompt";
import { IViolence_info } from "./protocols";

export class Violence_info implements IViolence_info {
  private prompt: Prompt;

  constructor(private readonly openaiClient: Openai) {
    this.prompt = new Prompt();
  }

  async getViolence_info(params: Violence_infoDTO): Promise<string> {
    const { destination, start_date } = params;

    const prompt = this.prompt.getViolenceInfoText(destination, start_date);

    const violence_info = await this.openaiClient.getOpenaiResponseText(prompt);

    return violence_info;
  }
}
