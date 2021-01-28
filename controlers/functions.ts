interface RomNumObj {
  "1": string
  "5": string
  "10": string
  "50": string
  "100": string
  "500": string
  "1000": string
}

export function convertToRomans(num: number): string {
  let result: string = ""
  let RomNum: RomNumObj = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M",
  }

  let RegExp: RegExp = /[0-9]/g

  let numberStr: string = `${num}`

  let numArr: string[] = numberStr.match(RegExp)

  if (numArr) {
    let length: number = numArr.length

    let factor: number

    if (length > 4) return ""

    numArr.map((num, index) => {
      factor = Math.pow(10, length - index - 1)

      let intNum = parseInt(num)

      if (intNum > 0 && intNum < 4) {
        for (let i = 0; i < intNum; i++) {
          result += RomNum[`${factor}`]
        }
      } else if (intNum === 4) {
        result += RomNum[`${factor}`]
        result += RomNum[`${factor * 5}`]
      } else if (intNum > 4 && intNum < 9) {
        result += RomNum[`${factor * 5}`]
        let over = intNum % 5
        for (let i = 0; i < over; i++) {
          result += RomNum[`${factor}`]
        }
      } else if (intNum === 9) {
        result += RomNum[`${factor}`]
        result += RomNum[`${factor * 10}`]
      }
    })
  }
  return result
}

export function convertFromRomans(num: string): number | boolean {
  if (/(?=.*[^IVXLCDM])/.test(num)) return false
  if (/(?=.*(VV)|(LL)|(DD))/.test(num)) return false
  if (/(?=.*(I){4,}|(X){4,}|(C){4,}|(M){4,})/.test(num)) return false
  if (/(?=.*(IVI)|(XLX)|(CDC))/.test(num)) return false

  let refRomanNumArr = ["I", "V", "X", "L", "C", "D", "M"]

  let refDecNumArr = [1, 5, 10, 50, 100, 500, 1000]

  let result: number = 0

  let romNumArr = num.match(/[IVXLCDM]/g)

  if (romNumArr) {
    for (let i = 0; i < romNumArr.length; i++) {
      let romNumIndex = refRomanNumArr.indexOf(romNumArr[i])
      if (romNumArr[i + 1]) {
        if (refRomanNumArr.indexOf(romNumArr[i + 1]) > romNumIndex + 2)
          return false
        if (refRomanNumArr.indexOf(romNumArr[i + 1]) <= romNumIndex) {
          result += refDecNumArr[romNumIndex]
        } else {
          result -= refDecNumArr[romNumIndex]
        }
      } else {
        result += refDecNumArr[romNumIndex]
      }
    }
  }
  return result
}
