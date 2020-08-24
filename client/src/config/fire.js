import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyDAiZ0721hsxA7Rde871PyN8dbsVnpteeA',
	authDomain: 'blog-assignment-acf8f.firebaseapp.com',
	databaseURL: 'https://blog-assignment-acf8f.firebaseio.com',
	projectId: 'blog-assignment-acf8f',
	storageBucket: 'blog-assignment-acf8f.appspot.com',
	messagingSenderId: '462668878029',
	appId: '1:462668878029:web:1c63299e005ed6e54d1984',
	measurementId: 'G-YNK2XYNBCK',
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
