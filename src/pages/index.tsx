import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex gap-4 justify-center items-center container h-screen">
        <h1>Home</h1>
        <Link href="/matches">Jogos</Link>
        <Link href="/teams">Times</Link>
        <Link href="/competitions">Campeonatos</Link>
      </div>
    </>
  )
}
