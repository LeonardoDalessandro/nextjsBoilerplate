// TO TEST
import { updateOrder } from "./order";

// TEST SUITE
describe("[UNIT TEST][PAGINATION SERVICE] order module", () => {
  describe("When setting instruction payload:", () => {
    it("updateOrder() should return same set but different item positions", () => {
      // INIT DATA
      const randomSet = [
        { val: "aaa", isTrue: false },
        { val: "bbb", isTrue: true },
        { val: "ccc", isTrue: false },
        { val: "ddd", isTrue: false },
        { val: "eee", isTrue: false },
      ];

      const result = updateOrder({
        collection: randomSet,
        options: {
          order: {
            by: "isTrue",
            isDesc: true,
          },
        },
      });

      expect(result).toEqual([
        { val: "aaa", isTrue: false },
        { val: "ccc", isTrue: false },
        { val: "ddd", isTrue: false },
        { val: "eee", isTrue: false },
        { val: "bbb", isTrue: true },
      ]);
    });

    it("updateOrder() should return same set but different item positions and remove unset data", () => {
      // INIT DATA
      const randomSet = [
        { val: "aaa", isTrue: false },
        { val: "bbb", isTrue: true },
        { isTrue: false },
        { val: "ddd", isTrue: true },
        { isTrue: false },
      ];

      const result = updateOrder({
        collection: randomSet,
        options: {
          order: {
            by: "val",
            isDesc: false,
          },
        },
      });

      expect(result).toEqual([
        { val: "ddd", isTrue: true },
        { val: "bbb", isTrue: true },
        { val: "aaa", isTrue: false },
        { isTrue: false },
        { isTrue: false },
      ]);
    });
  });
});
