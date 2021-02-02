import RomanNumerals from "../controllers/numbersConvertion/roman"


//Testing Convert from Roman numeral Function

test("Function return 26 when parameter is XXVI", ()=>{
    expect(RomanNumerals.from("XXVI")).toBe(26)
})

test("Function return false when parameter is MCXVV", ()=>{
    expect(RomanNumerals.from("MCXVV")).toBe(false)
})


test("Function return 1954 when parameter is MCMLIV", ()=>{
    expect(RomanNumerals.from("MCMLIV")).toBe(1954)
})

test("Function return false when parameter is MZMLIV", ()=>{
    expect(RomanNumerals.from("MZMLIV")).toBe(false)
})

test("Function return false when parameter is CDC", ()=>{
    expect(RomanNumerals.from("CDC")).toBe(false)
})

test("Function return false when parameter is XXXX", ()=>{
    expect(RomanNumerals.from("XXXX")).toBe(false)
})

test("Function return false when parameter is XDL", ()=>{
    expect(RomanNumerals.from("XDL")).toBe(false)
})