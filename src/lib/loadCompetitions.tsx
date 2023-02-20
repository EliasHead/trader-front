import { apiServer } from '@/services/api'

export async function loadCompetitions() {
  const res = await apiServer.get('/competition')
  const data = res.data

  return data
}
