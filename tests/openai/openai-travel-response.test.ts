/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Openai } from "../../src/database/openai";

describe("Openai", () => {
  let openaiTravelResponse: Openai;

  beforeAll(() => {
    process.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    openaiTravelResponse = new Openai();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a gpt chat response", async () => {
    const travelResponse = await openaiTravelResponse.getOpenaiResponseText(
      "retorne para mim esta palavara test com a letra t sempre minuscula e sempre completa"
    );

    expect(travelResponse).toBeTruthy();
    expect(travelResponse).toBe("test");
  }, 10000);

  it("should return an error when trying to return a responsee", async () => {
    process.env.OPENAI_API_KEY = undefined;

    const openaiTravelResponse2 = new Openai();

    const travelResponse = await openaiTravelResponse2.getOpenaiResponseText(
      "test"
    );

    expect(travelResponse).toEqual(
      "❌ OpenAI Response Error: Request failed with status code 401"
    );
  }, 30000);
});
