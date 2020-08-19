const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const admin = require('firebase-admin')
const fire = require('../../config/fire')

// @route     POST /auth/signup
// @desc      Sign up account
// @access    Public
router.post(
	'/signup',
	[
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').not().notEmpty(),
		check('firstname', 'First name is required').not().notEmpty(),
		check('lastname', 'Last name is required').not().notEmpty(),
		check('country', 'Country is required').not().notEmpty(),
	],
	(req, res) => {
		const { email, password, firstname, lastname, country } = req.body
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async (account) => {
				try {
					const user = {
						email,
						lastname,
						firstname,
						country,
						uid: account.user.uid,
					}

					await admin.firestore().collection('users').add(user)

					return res
						.status(201)
						.send({
							msg: 'User created successfully!!!',
							data: { uid: user.uid },
						})
				} catch (err) {
					console.log(err)

					const currentUser = fire.auth().currentUser
					currentUser.delete()

					return res.status(500).send('Server error...')
				}
			})
			.catch((err) => {
				console.log(err)

				return res.status(400).send({ errors: [{ msg: err.message }] })
			})
	}
)

// @route     POST /auth/signin-emailpassword
// @desc      Sign in account
// @access    Public
router.post(
	'/signin-emailpassword',
	[
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').not().notEmpty(),
	],
	(req, res) => {
		const { email, password } = req.body
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((account) => {
				return res.status(200).json({
					msg: 'Signed in successfully!!!',
					data: { uid: account.user.uid },
				})
			})
			.catch((err) => {
				console.log(err)

				return res.status(400).json({ errors: [{ msg: err.message }] })
			})
	}
)

// @route     POST /auth/signout
// @desc      Sign out account
// @access    Public
router.post('/signout', (req, res) => {
	fire
		.auth()
		.signOut()
		.then(() => {
			return res.status(200).send({
				msg: 'Signed out successfully!!!',
			})
		})
		.catch((err) => {
			console.log(err)

			return res.status(400).send({ errors: [{ msg: err.message }] })
		})
})

// @route     POST /auth/signout
// @desc      Sign out account
// @access    Public
router.post('/currently-signedin', (req, res) => {
	fire.auth().onAuthStateChanged((user) => {
		if (user) {
			return res
				.status(200)
				.send({ msg: 'Signed in!!!', data: { uid: user.uid } })
		} else {
			return res.status(204).send({ msg: 'No currently signed in user!!!' })
		}
	})
})

module.exports = router
