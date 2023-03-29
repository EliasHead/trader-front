import { PropsTeams } from '@/pages/teams'
import React, { useMemo, useState } from 'react'

export default function ListTeams({ teams }: PropsTeams) {
  const [search, setSearch] = useState('')

  const teamsFilter = useMemo(() => {
    const lowerSearch = search.toLowerCase()

    return teams.filter((team) =>
      team.team_name.toLowerCase().includes(lowerSearch),
    )
  }, [teams, search])

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teamsFilter.map((team) => {
                    return (
                      <tr className="border-b" key={team.team_id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {team.team_id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {team.team_name}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
