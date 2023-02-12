import { loadTeams } from '../lib/loadTeams'
import { GetStaticProps } from 'next'
import { loadCompetitions } from '@/lib/loadCompetitions'
import Link from 'next/link'
import Head from 'next/head'
import AddMatches, { PropsTeam } from '@/components/AddMatches'
import ListMatches from '@/components/ListMatches'
import { loadMatches } from '@/lib/loadMateches'

// type MatchesType = {
//   match_id?: number
//   match_date?: string | Date
//   home_goals?: number
//   visitor_goals?: number
//   odd?: number
//   strategy?: string
//   result?: string
//   review?: string
//   stake?: number
//   round?: number
//   competition_id: number
//   home_team_id: number
//   visitor_team_id: number
// }

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
