import { apiServer } from '@/services/api'

export async function loadMatches() {
  const res = await apiServer.get('/matches')
  const data = res.data

  return data
}
