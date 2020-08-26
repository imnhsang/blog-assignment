const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use((req, res, next) => {
	const allowedOrigins = ['http://localhost:3000']

	const origin = req.headers.origin
	if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin)
	}

	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	)

	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)

	res.setHeader('Access-Control-Allow-Credentials', true)

	next()
})

//add other middleware)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//add routers api
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/categories', require('./routes/api/categories'))

//start app
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`App is listening on port ${port}.`))