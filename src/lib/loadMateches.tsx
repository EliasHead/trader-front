import { api } from '@/services/api'

export async function loadMatches() {
  const res = await api.get('/matches')
  const data = res.data

  return data
}
