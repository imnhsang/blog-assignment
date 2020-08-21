export const isSuccess = (res) => {
	const { status } = res
	switch (status) {
		case 200:
			return true
		case 201:
			return true
		default:
			return false
	}
}
