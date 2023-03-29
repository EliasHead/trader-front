import AddTeam from '@/components/AddTeam'
import ListTeams from '@/components/ListTeams'
import { loadTeams } from '@/lib/loadTeams'
import Head from 'next/head'
import { GetStaticProps } from 'next/types'

export type Team = {
  team_id: number
  team_name: string
  team_country: string
  team_initials: string
  createdAt: Date
}

export type PropsTeams = {
  teams: Team[]
}

export default function Teams({ teams }: PropsTeams) {
  return (
    <>
      <Head>
        <title>Times</title>
      </Head>
      <AddTeam />
      <ListTeams teams={teams} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const teams = await loadTeams()

  return {
    props: {
      teams: teams.data,
    },
    revalidate: 60 * 60,
  }
}
