import { apiClient } from '@/services/api'
import Link from 'next/link'
import React, { useState } from 'react'

export default function AddCompetition() {
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

    // TODO: axios front side
    try {
      const response = await apiClient.post(
        'http://localhost:3000/competition',
        data,
      )
      console.log(response.data)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <Link className="m-8" href="/">
        Voltar
      </Link>
      <div className="w-full mx-auto">
        <h1 className="text-3xl text-center">Cadastro de competições</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex gap-8"
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
  )
}
