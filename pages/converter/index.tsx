import React from "react"
import Link from "next/link"


import RomanNumerals from "../../controllers/numbersConvertion/roman"
// import { Container } from './styles';

const RomanNumbers: React.FC = () => {
  const [numRom, setNumRom] = React.useState<string>("")
  const [numDec, setNumDec] = React.useState<string>("")

  return (
    <div>
      <h1>Numeros Romanos</h1>
      <br />
      <label>Roman numerals to Decimal</label>
      <input
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNumRom(e.currentTarget.value)
        }}
      />
      {RomanNumerals.from(numRom)}
      <br />
      <br />
      <label>Decimal to Roman numerals</label>
      <input
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNumDec(e.currentTarget.value)
        }}
      />
      {RomanNumerals.to(parseInt(numDec))}
      <br/>
      <Link href="/" >
         <a>Refresh the right way</a>
       </Link>
    </div>
  )
}

export default RomanNumbers
