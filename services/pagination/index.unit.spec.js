// To test
import { usePaginationService } from "./";

// Execute
describe("[UNIT TEST][PAGINATION SERVICE] main fn", () => {
  it("When call fetchSpacexApi(), should return a filled array", async () => {
    const randomSet = [
      { val: "eee" },
      { val: "aaa", isTrue: false },
      { val: "ddd", isTrue: false },
      { val: "bbb", isTrue: true },
      { isTrue: true },
      { val: "fff", isTrue: false },
    ];

    const result = await usePaginationService({
      collection: randomSet,
      options: {
        pagination: {
          offset: 0,
          requested: 2,
          itemsPerPage: 3,
        },
        order: {
          by: "val",
          isDesc: false,
        },
      },
    });

    expect(result).toEqual({
      request: {
        pagination: {
          requested: 2,
          itemsPerPage: 3,
          offset: 0,
          total: 1,
        },
        order: {
          by: "val",
          isDesc: false,
        },
      },
      data: [
        { val: "bbb", isTrue: true },
        { val: "aaa", isTrue: false },
        { isTrue: true },
      ],
    });
  });
});
