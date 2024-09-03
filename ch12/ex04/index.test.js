import { primes } from "./index.js";

test("正常系", () => {
  expect(primes.next()).toEqual(2);
});

test("正常系", () => {
  expect(primes.next()).toEqual(3);
});

test("正常系", () => {
  expect(primes.next()).toEqual(5);
});

test("異常系", () => {
  expect(primes.throw(new Error("やめる"))).toEqual("やめる");
});
