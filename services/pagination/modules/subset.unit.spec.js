// TO TEST
import { setSubset } from "./subset";

// TEST SUITE
describe("[UNIT TEST][PAGINATION SERVICE] Subset module", () => {
  describe("When setting instruction payload:", () => {
    it("setSubset() should return new set", () => {
      // INIT DATA
      const randomSet = [
        { val: "aaa", isTrue: false },
        { val: "bbb", isTrue: true },
        { val: "ccc", isTrue: true },
        { val: "ddd", isTrue: false },
        { val: "eee", isTrue: false },
      ];

      const result = setSubset({
        collection: randomSet,
        options: {
          pagination: {
            offset: 0,
            requested: 2,
            itemsPerPage: 2,
          },
        },
      });

      expect(result).toEqual([
        { val: "ccc", isTrue: true },
        { val: "ddd", isTrue: false },
      ]);
    });

    it("fn({ data, page}) should return new set with offset", () => {
      // INIT DATA
      const randomSet = [
        { val: "aaa", isTrue: false },
        { val: "bbb", isTrue: true },
        { val: "ccc", isTrue: true },
        { val: "ddd", isTrue: false },
        { val: "eee", isTrue: false },
      ];

      const result = setSubset({
        collection: randomSet,
        options: {
          pagination: {
            offset: 4,
            requested: 2,
            itemsPerPage: 2,
          },
        },
      });

      expect(result).toEqual([
        { val: "ddd", isTrue: false },
        { val: "eee", isTrue: false },
      ]);
    });
  });
});
