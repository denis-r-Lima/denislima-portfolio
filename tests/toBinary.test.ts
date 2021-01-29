import { toBinary } from "../controlers/binary"

test("Return false for '132aB9'", () => {
  expect(toBinary("132aB9")).toBe(false)
})

test("Return '10011100101' for '1253'", () => {
  expect(toBinary("1253")).toBe("10011100101")
})

test("Return false for '4.3.2'", () => {
  expect(toBinary("4.3.2")).toBe(false)
})

test("Return 0.011 for '0.375'", () => {
  expect(toBinary("0.375")).toBe("0.011")
})

test("Return 10.01 for '2.5'", () => {
  expect(toBinary("2.5")).toBe("10.1")
})
