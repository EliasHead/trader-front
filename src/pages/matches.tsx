import { api } from '@/services/api'
import { useState } from 'react'

type Teams = {
  team_id: number
  team_name: string
  team_country: string
  team_initials: string
  createdAt: Date
}

export default function Matches() {
  const [teams, setTeams] = useState<Teams[]>([])

  api
    .get('/teams')
    .then(function (response) {
      setTeams(response.data)
      console.log(teams)
    })
    .catch(function (error) {
      console.error(error)
    })

  return (
    <>
      {teams.map((team) => {
        return (
          <ul key={team.team_id}>
            <li>{team.team_name}</li>
          </ul>
        )
      })}
    </>
  )
}
