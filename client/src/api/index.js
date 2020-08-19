import axios from 'axios'

// import { objectToQueryString } from 'utils'

export const host =
	'https://us-central1-blog-assignment-acf8f.cloudfunctions.net/blogassignment'
export const apiHost = `${host}/api/`

const instance = axios.create({
	baseURL: apiHost,
})

const api = {
	post: async (url, data, config) => {
		let options = {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		}

		if (config) {
			options = { ...options, ...config }
		}

		try {
			const response = await instance.post(
				`${url}`,
				JSON.stringify(data),
				options
			)
			return response
		} catch (e) {
			return e.response
		}
	},
}

export default api
