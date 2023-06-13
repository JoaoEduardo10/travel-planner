import { OpenaiTravelResponse } from "../../../src/openai/openai-travel-response";
import { Violence_info } from "../../../src/services/violence_info/violence-info";

describe("Violence_info", () => {
  it("should return information, criminality actions", async () => {
    const openaiTravelResponse = new OpenaiTravelResponse();

    const violence_info = new Violence_info(openaiTravelResponse);

    const response = await violence_info.getViolence_info({
      destination: "teresina-pi",
      start_date: "10/11/2022",
    });

    expect(response).toBeTruthy();
  }, 10000);
});
