import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Container, ImgFrame , TextCloud, HeaderFrame} from "../styles/index/styles"

export default function Home() {
  return (
    <div >
      <Head>
        <title>Hi! I am Denis Lima</title>
        <link rel="icon" href="/me_60px.ico"/>
      </Head>
      <Container>
        <HeaderFrame>
          <ImgFrame>
            <Image src="/my8biticon.jpg" height={250} width={250} alt="Me in 8 bits"  />
          </ImgFrame>
          <TextCloud id="CloudText">Hi! I am Denis, a full stack JavaScript developer!</TextCloud>
        </HeaderFrame>
       {/* <Link href="/converter" >
         <a>Unit Converter</a>
       </Link> */}
      </Container>
    </div>
  )
}
