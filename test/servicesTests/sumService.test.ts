import sum from "../../src/api/core/application/services/sumService";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
