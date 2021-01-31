import {convertFromRomans} from "../controllers/numbersConvertion/roman"


//Testing Convert from Roman numeral Function

test("Function return 26 when parameter is XXVI", ()=>{
    expect(convertFromRomans("XXVI")).toBe(26)
})

test("Function return false when parameter is MCXVV", ()=>{
    expect(convertFromRomans("MCXVV")).toBe(false)
})


test("Function return 1954 when parameter is MCMLIV", ()=>{
    expect(convertFromRomans("MCMLIV")).toBe(1954)
})

test("Function return false when parameter is MZMLIV", ()=>{
    expect(convertFromRomans("MZMLIV")).toBe(false)
})

test("Function return false when parameter is CDC", ()=>{
    expect(convertFromRomans("CDC")).toBe(false)
})

test("Function return false when parameter is XXXX", ()=>{
    expect(convertFromRomans("XXXX")).toBe(false)
})

test("Function return false when parameter is XDL", ()=>{
    expect(convertFromRomans("XDL")).toBe(false)
})