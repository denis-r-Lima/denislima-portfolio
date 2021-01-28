import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Hi! I am Denis Lima</title>
      </Head>
      <main>
       <Link href="/converter" >
         <a>Unit Converter</a>
       </Link>
      </main>
    </div>
  )
}
