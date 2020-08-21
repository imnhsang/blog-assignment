import axios from 'axios'

export const host =
	'https://us-central1-blog-assignment-acf8f.cloudfunctions.net/blogassignment'
export const apiHost = `${host}/api/`

const instance = axios.create({
	baseURL: apiHost,
	headers: {
		'Content-Type': 'application/json',
	},
})

export default instance
