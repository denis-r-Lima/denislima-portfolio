import { fromBinary } from "../controlers/binary"

test("Should return 14 for 1110", () => {
  expect(fromBinary("1110")).toBe(14)
})

test("Should return false for 1210", () => {
  expect(fromBinary("1210")).toBe(false)
})

test("Should return 1253 for 010011100101", () => {
  expect(fromBinary("010011100101")).toBe(1253)
})

test("Should return false for 01001.11.00101", () => {
  expect(fromBinary("01001.11.00101")).toBe(false)
})

test("Should return 2.5 for 10.01", () => {
  expect(fromBinary("10.01")).toBe(2.25)
})
