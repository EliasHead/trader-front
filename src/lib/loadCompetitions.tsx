import { api } from '@/services/api'

export async function loadCompetitions() {
  const res = await api.get('/competition')
  const data = res.data

  return data
}
