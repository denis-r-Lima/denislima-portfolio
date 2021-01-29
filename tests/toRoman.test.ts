import {convertToRomans} from "../controlers/roman"


//Testing Convert to Roman numeral Function
test("Function return III for num 3", ()=>{
    expect(convertToRomans(3)).toBe("III")
})

test("Function return XXXIV for num 34", ()=>{
    expect(convertToRomans(34)).toBe("XXXIV")
})

test("Function return CLVI for num 156", ()=>{
    expect(convertToRomans(156)).toBe("CLVI")
})

test("Function return CMXCIX for num 999", ()=>{
    expect(convertToRomans(999)).toBe("CMXCIX")
})

test("Function return MDCCLXXVI for num 1776", ()=>{
    expect(convertToRomans(1776)).toBe("MDCCLXXVI")
})

test("Function return '' for num 21776", ()=>{
    expect(convertToRomans(21776)).toBe("")
})

test("Function return '' for num 35.3", ()=>{
    expect(convertToRomans(35.3)).toBe("")
})
