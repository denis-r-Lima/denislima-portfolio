// export function fromBinary(num: string): number | boolean {
//   if (/(?=.*[^01\.])/.test(num)) return false
//   let dotCheck = num.match(/\./g)
//   if (dotCheck && dotCheck.length > 1) return false
//   let [int, dec] = num.split(".")

//   let result = 0

//   if (dec) {
//     let decBinNumArr = dec.match(/[01]/g)

//     decBinNumArr.map((bin, index) => {
//       let num = parseInt(bin)
//       if (num === 1) {
//         result += 1 / Math.pow(2, index + 1)
//       }
//     })
//   }

//   let intBinNumArr = int.match(/[01]/g)

//   if (intBinNumArr) {
//     let length = intBinNumArr.length - 1
//     intBinNumArr.map((bin, index) => {
//       let num = parseInt(bin)
//       if (num === 1) {
//         result += Math.pow(2, length - index)
//       }
//     })
//   }

//   return result
// }

// export function toBinary(num: string): string | boolean {
//   if (/[^0-9\.]/.test(num)) return false
//   let checkDot = num.match(/\./g)
//   if (checkDot && checkDot.length > 1) return false
//   let reminderInt: number[] = []
//   let intPart: number[] = []

//   let [int, dec] = num.split(".")

//   if (int) {
//     let dividend = parseInt(int)

//     do {
//       reminderInt.push(dividend % 2)
//       dividend = Math.trunc(dividend / 2)
//     } while (dividend !== 0)

//     if (dec) {
//       let decPart = parseFloat(`0.${dec}`)

//       while (decPart !== 0) {
//         decPart = decPart * 2
//         intPart.push(Math.trunc(decPart))
//         decPart -= Math.trunc(decPart)
//       }
//       return `${reminderInt.slice().reverse().join("")}.${intPart.join("")}`
//     }
//     return reminderInt.slice().reverse().join("")
//   }
//   return ""
// }

class Binary {
  fromBinary(num: string): number | boolean {
    if (/(?=.*[^01\.])/.test(num)) return false
    let dotCheck = num.match(/\./g)
    if (dotCheck && dotCheck.length > 1) return false
    let [int, dec] = num.split(".")
  
    let result = 0
  
    if (dec) {
      let decBinNumArr = dec.match(/[01]/g)
  
      decBinNumArr.map((bin, index) => {
        let num = parseInt(bin)
        if (num === 1) {
          result += 1 / Math.pow(2, index + 1)
        }
      })
    }
  
    let intBinNumArr = int.match(/[01]/g)
  
    if (intBinNumArr) {
      let length = intBinNumArr.length - 1
      intBinNumArr.map((bin, index) => {
        let num = parseInt(bin)
        if (num === 1) {
          result += Math.pow(2, length - index)
        }
      })
    }
  
    return result
  }

  toBinary(num: string): string | boolean {
    if (/[^0-9\.]/.test(num)) return false
    let checkDot = num.match(/\./g)
    if (checkDot && checkDot.length > 1) return false
    let reminderInt: number[] = []
    let intPart: number[] = []
  
    let [int, dec] = num.split(".")
  
    if (int) {
      let dividend = parseInt(int)
  
      do {
        reminderInt.push(dividend % 2)
        dividend = Math.trunc(dividend / 2)
      } while (dividend !== 0)
  
      if (dec) {
        let decPart = parseFloat(`0.${dec}`)
  
        while (decPart !== 0) {
          decPart = decPart * 2
          intPart.push(Math.trunc(decPart))
          decPart -= Math.trunc(decPart)
        }
        return `${reminderInt.slice().reverse().join("")}.${intPart.join("")}`
      }
      return reminderInt.slice().reverse().join("")
    }
    return ""
  }
}

export default new Binary