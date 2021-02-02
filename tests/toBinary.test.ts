import Binary from "../controllers/numbersConvertion/binary"

test("Return false for '132aB9'", () => {
  expect(Binary.toBinary("132aB9")).toBe(false)
})

test("Return '10011100101' for '1253'", () => {
  expect(Binary.toBinary("1253")).toBe("10011100101")
})

test("Return false for '4.3.2'", () => {
  expect(Binary.toBinary("4.3.2")).toBe(false)
})

test("Return 0.011 for '0.375'", () => {
  expect(Binary.toBinary("0.375")).toBe("0.011")
})

test("Return 10.01 for '2.5'", () => {
  expect(Binary.toBinary("2.5")).toBe("10.1")
})
