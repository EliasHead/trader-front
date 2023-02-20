import { loadTeams } from '../lib/loadTeams'
import { GetStaticProps } from 'next'
import { loadCompetitions } from '@/lib/loadCompetitions'
import Link from 'next/link'
import Head from 'next/head'
import AddMatches, { PropsTeam } from '@/components/AddMatches'
import ListMatches from '@/components/ListMatches'
import { loadMatches } from '@/lib/loadMateches'

export default function Matches({ teams, competitions, matches }: PropsTeam) {
  return (
    <>
      <Head>
        <title>Jogos</title>
      </Head>
      <Link className="m-8" href="/">
        Voltar
      </Link>
      <AddMatches competitions={competitions} teams={teams} />
      <ListMatches matches={matches} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const teams = await loadTeams()
  const matches = await loadMatches()

  const competitions = await loadCompetitions()

  return {
    props: {
      teams,
      competitions,
      matches,
    },
    revalidate: 60 * 60,
  }
}
