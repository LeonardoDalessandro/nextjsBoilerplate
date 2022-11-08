// To test
import { useApiService } from "../api";

// Execute
describe("[UNIT TEST][API SERVICE] Space X modules", () => {
  it("When call fetchSpacexApi(), should return a filled array", async () => {
    const result = await useApiService({
      module: "spacex",
      model: "launch",
      action: "getList",
    });

    expect(result.length > 0).toBeTruthy();
  });
});
