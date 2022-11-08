// To tests
import { getLaunches } from "./index";

describe("[UNIT TEST][LUNCHES PROVIDER]", () => {
  describe("when call getLaunches(),", () => {
    it("should return 10 results", async () => {
      const result = await getLaunches();

      expect(result.length).toBe(10);
    });

    it("should have expected launch as first item", async () => {
      const result = await getLaunches();
      expect(result[0]).toEqual({
        id: "5eb87cd9ffd86e000604b32a",
        name: "FalconSat",
        date: "2006-03-24T22:30:00.000Z",
        success: false,
      });
    });
  });
});
