import React from "react"

import { convertFromRomans, convertToRomans } from "../../controlers/functions"
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
      {convertFromRomans(numRom)}
      <br />
      <br />
      <label>Decimal to Roman numerals</label>
      <input
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNumDec(e.currentTarget.value)
        }}
      />
      {convertToRomans(parseInt(numDec))}
    </div>
  )
}

export default RomanNumbers
