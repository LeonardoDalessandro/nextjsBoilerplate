// TO TEST
import { setFormat } from "./format";

// TEST SUITE
describe("[UNIT TEST][PAGINATION SERVICE] order module", () => {
  describe("When setting instruction payload:", () => {
    it("setFormat() should return same set but different item positions", () => {
      // INIT DATA
      const randomSet = [
        { val: "aaa", isTrue: false },
        { val: "bbb", isTrue: true },
        { val: "ccc", isTrue: false },
        { val: "ddd", isTrue: false },
        { val: "eee", isTrue: false },
      ];

      const result = setFormat({
        collection: randomSet,
      });

      expect(result).toEqual({
        request: {
          pagination: {
            requested: 1,
            itemsPerPage: 10,
            offset: 0,
            total: 1,
          },
          order: {
            by: "id",
            isDesc: true,
          },
        },
        data: randomSet,
      });
    });
  });
});
