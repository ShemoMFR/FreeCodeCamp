import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDUotbd1oaDuxLayyPAdmr0iuBFoj2B--0',
	authDomain: 'root-project-3f195.firebaseapp.com',
	projectId: 'root-project-3f195',
	storageBucket: 'root-project-3f195.appspot.com',
	messagingSenderId: '1076305130536',
	appId: '1:1076305130536:web:263d2ed50a8d677cfb311d',
	measurementId: 'G-EH67D7ZL6S',
};

// Initialize Firebase
const FireApp = firebase.initializeApp(firebaseConfig);

export default FireApp;
