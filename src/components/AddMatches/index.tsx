import { api } from '@/services/api'
import React, { useState } from 'react'

export type Teams = {
  team_id: number
  team_name: string
  team_country: string
  team_initials: string
  createdAt: Date
}

type Competitions = {
  competition_id?: number
  competition_name: string
  season_name: string
}

export type Matches = {
  match_id: number
  match_date: Date
  home_team: {
    team_name: string
  }
  home_goals: number
  visitor_goals: number
  visitor_team: {
    team_name: string
  }
  result: string
}

export type PropsTeam = {
  teams?: Teams[]
  competitions?: Competitions[]
  matches?: Matches[]
}

export default function AddMatches({ teams, competitions }: PropsTeam) {
  const rounds = [
    { id: 1, roundvalue: 1 },
    { id: 2, roundvalue: 2 },
    { id: 3, roundvalue: 3 },
    { id: 4, roundvalue: 4 },
    { id: 5, roundvalue: 5 },
    { id: 6, roundvalue: 6 },
    { id: 7, roundvalue: 7 },
    { id: 8, roundvalue: 8 },
    { id: 9, roundvalue: 9 },
    { id: 10, roundvalue: 10 },
    { id: 11, roundvalue: 11 },
    { id: 12, roundvalue: 12 },
    { id: 13, roundvalue: 13 },
    { id: 14, roundvalue: 15 },
    { id: 16, roundvalue: 16 },
    { id: 17, roundvalue: 17 },
    { id: 18, roundvalue: 18 },
    { id: 19, roundvalue: 19 },
    { id: 20, roundvalue: 20 },
    { id: 21, roundvalue: 21 },
    { id: 22, roundvalue: 22 },
    { id: 23, roundvalue: 23 },
    { id: 24, roundvalue: 24 },
    { id: 25, roundvalue: 25 },
    { id: 26, roundvalue: 26 },
    { id: 27, roundvalue: 27 },
    { id: 28, roundvalue: 28 },
    { id: 29, roundvalue: 29 },
    { id: 30, roundvalue: 30 },
    { id: 31, roundvalue: 31 },
    { id: 32, roundvalue: 32 },
    { id: 33, roundvalue: 33 },
    { id: 34, roundvalue: 34 },
    { id: 35, roundvalue: 35 },
    { id: 36, roundvalue: 36 },
  ]

  const [homeTeam, setHomeTeam] = useState('')
  const [visitorTeam, setVisitorTeam] = useState('')
  const [competition, setCompetition] = useState('')
  const [roundName, setRoundName] = useState<string>('')

  const handleHomeTeam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHomeTeam(e.currentTarget.value)
  }

  const handleVisitorTeam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVisitorTeam(e.currentTarget.value)
  }

  const handleCompetition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCompetition(e.currentTarget.value)
  }

  const handleRound = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoundName(e.currentTarget.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const data = {
      home_team_id: homeTeam,
      visitor_team_id: visitorTeam,
      competition_id: competition,
      round: roundName,
    }

    api
      .post('/matches', data)
      .then(function (response) {
        console.log(response)
        setHomeTeam('')
        setVisitorTeam('')
        setCompetition('')
        setRoundName('')
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <div className="container flex flex-wrap gap-4 m-auto mt-4 items-end">
      <div className="flex flex-col items-center">
        <label htmlFor="teams">Home team:</label>
        <select
          onChange={(e) => handleHomeTeam(e)}
          className="form-select px-4 py-3 rounded"
          name="teams"
          id="teams"
        >
          <option value="default">Escolha o time da casa</option>
          {teams?.map((team) => {
            return (
              <option key={team.team_id} value={team.team_id}>
                {team.team_name}
              </option>
            )
          })}
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="teams">Time Visitante:</label>
        <select
          onChange={(e) => handleVisitorTeam(e)}
          className="form-select px-4 py-3 rounded"
          name="teams"
          id="teams"
        >
          <option value="default">Escolha o time da visitante</option>
          {teams?.map((team) => {
            return (
              <option key={team.team_id} value={team.team_id}>
                {team.team_name}
              </option>
            )
          })}
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="competitions">Competição:</label>
        <select
          onChange={(e) => handleCompetition(e)}
          className="form-select pr-10-6 py-3 rounded"
          name="competitions"
          id="competitions"
        >
          <option value="default">Escolha a competição</option>
          {competitions?.map((competition) => {
            return (
              <option
                className=""
                key={competition.competition_id}
                value={competition.competition_id}
              >
                {competition.competition_name}
              </option>
            )
          })}
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label htmlFor="rounds">Rodada:</label>
        <select
          onChange={(e) => handleRound(e)}
          className="form-select pr-10-6 py-3 rounded"
          name="rounds"
          id="rounds"
        >
          <option value="default">Rodada</option>
          {rounds.map((round) => {
            return (
              <option className="" key={round.id} value={round.id}>
                {round.roundvalue}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
        >
          Casdastrar
        </button>
      </div>
    </div>
  )
}
