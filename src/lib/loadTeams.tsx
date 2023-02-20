import { apiServer } from '@/services/api'

export async function loadTeams() {
  const res = await apiServer.get('/teams')
  const data = res.data

  return data
}
