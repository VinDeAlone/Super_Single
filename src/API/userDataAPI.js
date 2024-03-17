import axios from 'axios'

export const submitAPI = (data) => axios.post("http://host.docker.internal:8084/user", data)