import React from "react"


import { convertFromRomans } from "../../controlers/functions"
// import { Container } from './styles';

const RomanNumbers: React.FC = () => {
  const [numRom, setNumRom] = React.useState<string>("")

  return (
    <div>
      <h1>Numeros Romanos</h1>
      <input
        type='text'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNumRom(e.currentTarget.value)
        }}
      />
      {convertFromRomans(numRom)}
    </div>
  )
}

export default RomanNumbers
