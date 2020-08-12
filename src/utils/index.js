export const validateEmail = (email) => {
	return !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/gm.test(email)
}

export const lengthToArrayBoolean = (length) => {
	return Array(length).fill(true, 0, 1)
}
