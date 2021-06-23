import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexEntries = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/entries'
  })
}

export const showEntry = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/entries/' + id
  })
}

export const createEntry = (data, user) => {
  return axios({
    url: apiUrl + '/create-entry',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: data
  })
}

export const deleteEntry = (user) => {
  return axios({
    url: apiUrl + '/entries',
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const updateEntry = (id, data, user) => {
  return axios({
    url: apiUrl + '/entries/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: data
  })
}