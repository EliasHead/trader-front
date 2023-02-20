import axios from 'axios'

// TODO: axios server side
export const api = axios.create({
  baseURL: 'http://api:3000',
})
