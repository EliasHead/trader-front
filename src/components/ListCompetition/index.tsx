import { PropsCompetition } from '@/pages/competitions'
import React from 'react'

export default function ListCompetition({ competitions }: PropsCompetition) {
  return (
    <div>
      <>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {competitions.map((competition) => {
              return (
                <tr key={competition.competition_id}>
                  <td>{competition.competition_id} - </td>
                  <td>{competition.competition_name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    </div>
  )
}
