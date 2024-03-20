import axios from 'axios'

export const submitAPI = (data) => axios.post("http://localhost:7043/user", data)