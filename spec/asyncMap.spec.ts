import { sleep, asyncMap } from "../src";

describe('asyncMap',() => {
  it("should map an array async", async () => {
    const arr = [69, 69, 69];
    const fn = async (value: number) => {
      await sleep(100);
      return value + 1;
    };
    expect(await asyncMap(arr, fn)).toEqual([70, 70, 70]);
  });
}  )
