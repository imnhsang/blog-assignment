export const validateEmail = (email) => {
	return !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/gm.test(email)
}

export const lengthToArrayBoolean = (length) => {
	return Array(length).fill(true, 0, 1)
}

export const setUIDToStorage = (uid) => {
	localStorage.setItem('uid', uid)
}

export const getUIDFromStorage = () => {
	const uid = localStorage.getItem('uid')
	return uid
}

export const clearStorage = () => {
	localStorage.clear()
}

export const objectToQueryString = (obj) => {
	return Object.keys(obj)
		.map((key) => `${key}=${obj[key]}`)
		.join('&')
}

export const uppercaseFirstLetter = (letter) => {
	return letter.charAt(0).toUpperCase() + letter.slice(1)
}

export const convertContentToURL = (content) => {
	return content.toLowerCase().replace(/\s/g, '-')
}
