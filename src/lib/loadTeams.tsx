import { api } from '@/services/api'

export async function loadTeams() {
  const res = await api.get('/teams')
  const data = res.data

  return data
}
