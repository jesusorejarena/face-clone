import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyA7NnciAa-bMZRuCDJOCJbtbWln3PmQ3aw',
	authDomain: 'face-clone-18e00.firebaseapp.com',
	projectId: 'face-clone-18e00',
	storageBucket: 'face-clone-18e00.appspot.com',
	messagingSenderId: '408591339473',
	appId: '1:408591339473:web:82e012526a9e2c6ffd5af0',
});

const db = firebaseConfig.firestore();
const storage = firebaseConfig.storage();

export { db, storage };
