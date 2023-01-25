import { api } from '@/services/api'
import React, { useState } from 'react'

export default function Competitons() {
  const [competitionName, setCompetitionName] = useState('')
  const [seasonName, setSeasonName] = useState('')

  const handleCompetition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompetitionName(e.currentTarget.value)
  }

  const handleSeasonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeasonName(e.currentTarget.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const data = {
      competition_name: competitionName,
      season_name: seasonName,
    }

    api
      .post('/competition', data)
      .then(function (response) {
        console.log(response)
        setCompetitionName('')
        setSeasonName('')
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <>
      <div className="container">
        <div className="w-full max-w-md mx-auto mt-40">
          <h1 className="text-3xl text-center">Cadastro de competições</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="teams"
              >
                Nome da competição
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="teams"
                type="text"
                placeholder="Digite o nome da competição"
                value={competitionName}
                onChange={(e) => handleCompetition(e)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Temporada
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                value={seasonName}
                placeholder="digite a temporada ex: 22/23"
                onChange={(e) => handleSeasonName(e)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cadastrar competição
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
