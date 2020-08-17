const functions = require('firebase-functions')
const express = require('express')

const admin = require('firebase-admin')
admin.initializeApp()

const app = express()

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
	res.status(200).send('APIs are running...')
})

app.post('/signup', async (req, res) => {
	const user = req.body
	try {
		await admin.firestore().collection('users').add(user)

		res.status(201).send({ msg: 'Account created successfully!!!' })
	} catch (error) {
		console.log(error)
		res.status(500).send('Server error...')
	}
})

app.get('/user/:uid', async (req, res) => {
	const { uid } = req.params
	console.log(uid)
	try {
		const snapshot = await admin
			.firestore()
			.collection('users')
			.where('uid', '==', uid)
			.get()

		let users = []
		snapshot.forEach((doc) => {
			let id = doc.id
			let data = doc.data()

			users.push({ id, ...data })
		})

		res.status(201).send({
			msg: 'Information User got successfully!!!',
			users,
		})
	} catch (error) {
		res.status(500).send('Server error...')
	}
})

exports.blogassignment = functions.https.onRequest(app)
