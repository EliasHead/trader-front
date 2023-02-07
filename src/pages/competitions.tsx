import AddCompetition from '@/components/AddCompetition'
import ListCompetition from '@/components/ListCompetition'
import Head from 'next/head'
import { loadCompetitions } from '@/lib/loadCompetitions'
import { GetStaticProps } from 'next/types'

export type Competition = {
  competition_id: number
  competition_name: string
  season_name: string
}

export type PropsCompetition = {
  competitions: Competition[]
}

export default function Competitons({ competitions }: PropsCompetition) {
  return (
    <>
      <Head>
        <title>Campeonatos</title>
      </Head>
      <AddCompetition />
      <ListCompetition competitions={competitions} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const competitions = await loadCompetitions()

  return {
    props: {
      competitions,
    },
    revalidate: 60 * 60,
  }
}
