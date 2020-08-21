const functions = require('firebase-functions')
const express = require('express')

const app = express()

const admin = require('firebase-admin')
admin.initializeApp()

app.use((req, res, next) => {
	// Website you wish to allow to connect
	const allowedOrigins = ['http://localhost:3000']

	const origin = req.headers.origin
	if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin)
	}

	// Request methods you wish to allow
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	)

	// Request headers you wish to allow
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true)

	// Pass to next layer of middleware
	next()
})

app.get('/', async (req, res) => {
	res.status(200).send('API running...')
})

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/categories', require('./routes/api/categories'))

exports.blogassignment = functions.https.onRequest(app)
