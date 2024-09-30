import { typeTemplateLiteral } from "./index.js";

test("string", () => {
  const result = typeTemplateLiteral`${"A"}`;
  expect(result).toBe("string");
});

test("object", () => {
  const result = typeTemplateLiteral`${{ x: 1 }}`;
  expect(result).toBe("object");
});

test("number", () => {
  const result = typeTemplateLiteral`${42}`;
  expect(result).toBe("number");
});

test("boolean", () => {
  const result = typeTemplateLiteral`${true}`;
  expect(result).toBe("boolean");
});

test("undefined", () => {
  const result = typeTemplateLiteral`${undefined}`;
  expect(result).toBe("undefined");
});
