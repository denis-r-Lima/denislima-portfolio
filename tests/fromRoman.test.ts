import {convertFromRomans} from "../controlers/functions"


//Testing Convert from Roman numeral Function

test("Function return 26 when parameter is XXVI", ()=>{
    expect(convertFromRomans("XXVI")).toBe(26)
})

test("Function return false when parameter is MCXVV", ()=>{
    expect(convertFromRomans("MCXCC")).toBe(false)
})


test("Function return 1954 when parameter is MCMLIV", ()=>{
    expect(convertFromRomans("MCMLIV")).toBe(1954)
})

test("Function return false when parameter is MZMLIV", ()=>{
    expect(convertFromRomans("MZMLIV")).toBe(false)
})