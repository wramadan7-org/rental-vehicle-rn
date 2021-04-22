/* eslint-disable import/no-named-default */
import { default as axios } from 'axios'
import { APP_PORT } from '@env'
console.log(APP_PORT)

const http = (token = null) => {
  const headers = {}
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return axios.create({
    baseURL: APP_PORT,
    headers
  })
}

export default http
