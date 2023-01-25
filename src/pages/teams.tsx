import { api } from '@/services/api'
import React, { useState } from 'react'

export default function Teams() {
  const [teamName, setTeamName] = useState('')
  const [teamCountry, setTeamCountry] = useState('')

  const handleTeams = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.currentTarget.value)
  }

  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamCountry(e.currentTarget.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const data = {
      team_name: teamName,
      team_country: teamCountry,
    }

    api
      .post('/teams', data)
      .then(function (response) {
        console.log(response)
        setTeamName('')
        setTeamCountry('')
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <>
      <div className="container">
        <div className="w-full max-w-md mx-auto mt-40">
          <h1 className="text-3xl text-center">Cadastro do Time</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="teams"
              >
                Nome do Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="teams"
                type="text"
                placeholder="digite o time"
                value={teamName}
                onChange={(e) => handleTeams(e)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                País do Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                value={teamCountry}
                placeholder="digite o country do time"
                onChange={(e) => handleCountry(e)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
