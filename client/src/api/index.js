import axios from 'axios'

export const host = 'http://localhost:5000'
export const apiHost = `${host}/api/`

const instance = axios.create({
	baseURL: apiHost,
	headers: {
		'Content-Type': 'application/json',
	},
})

export default instance
