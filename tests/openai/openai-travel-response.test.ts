/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { OpenaiTravelResponse } from "../../src/openai/openai-travel-response";

describe("OpenaiTravelResponse", () => {
  let openaiTravelResponse: OpenaiTravelResponse;

  beforeAll(() => {
    process.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    openaiTravelResponse = new OpenaiTravelResponse();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a gpt chat response", async () => {
    const travelResponse = await openaiTravelResponse.getTravelResponse(
      "retorne para mim esta palavara 'test' com a letra t sempre minuscula"
    );

    expect(travelResponse).toBeTruthy();
    expect(travelResponse).toEqual("test");
  }, 10000);

  it("should return an error when trying to return a responsee", async () => {
    process.env.OPENAI_API_KEY = undefined;

    const openaiTravelResponse2 = new OpenaiTravelResponse();

    const travelResponse = await openaiTravelResponse2.getTravelResponse(
      "test"
    );

    expect(travelResponse).toEqual(
      "❌ OpenAI Response Error: Request failed with status code 401"
    );
  }, 30000);
});
