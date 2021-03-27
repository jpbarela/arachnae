import { sortDataByColumn } from "./arrayUtils";

describe("sortDataByColumn", () => {
  it("leaves the original array unchanged", () => {
    const original = [
      ["d", "e", "f"],
      ["a", "b", "c"],
      ["g", "h", "i"],
    ];
    sortDataByColumn(original, 0);
    expect(original).toEqual([
      ["d", "e", "f"],
      ["a", "b", "c"],
      ["g", "h", "i"],
    ]);
  });

  it("sorts strings", () => {
    const original = [
      ["d", "e", "f"],
      ["a", "b", "c"],
      ["g", "h", "i"],
    ];
    expect(sortDataByColumn(original, 0)).toEqual([
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ]);
  });

  it("sorts numbers", () => {
    const original = [
      ["d", 2, "f"],
      ["a", 3, "c"],
      ["g", 1, "i"],
    ];
    expect(sortDataByColumn(original, 1)).toEqual([
      ["g", 1, "i"],
      ["d", 2, "f"],
      ["a", 3, "c"],
    ]);
  });

  it("sorts dates", () => {
    const original = [
      ["d", 2, new Date(2021, 2, 1)],
      ["g", 1, new Date(2021, 0, 1)],
      ["a", 3, new Date(2021, 1, 1)],
    ];
    expect(sortDataByColumn(original, 2)).toEqual([
      ["g", 1, new Date(2021, 0, 1)],
      ["a", 3, new Date(2021, 1, 1)],
      ["d", 2, new Date(2021, 2, 1)],
    ]);
  });

  it("accepts direction", () => {
    const original = [
      ["d", 2, new Date(2021, 2, 1)],
      ["g", 1, new Date(2021, 0, 1)],
      ["a", 3, new Date(2021, 1, 1)],
    ];
    expect(sortDataByColumn(original, 0, "DESC")).toEqual([
      ["g", 1, new Date(2021, 0, 1)],
      ["d", 2, new Date(2021, 2, 1)],
      ["a", 3, new Date(2021, 1, 1)],
    ]);
  });
});
