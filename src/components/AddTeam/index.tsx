// import { api } from '@/services/api'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

export default function AddTeam() {
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

    // TODO: axios front side
    try {
      const response = await axios.post('http://localhost:3000/teams', data)
      console.log(response.data)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="container">
        <Link className="m-8" href="/">
          Voltar
        </Link>
        <div className="w-full mx-auto">
          <h1 className="text-3xl text-center">Cadastro do Time</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex gap-8"
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
