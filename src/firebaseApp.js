import firebase from 'firebase';

const app = firebase.initializeApp({
	apiKey: "AIzaSyCKsoi5NuhdxdjThPZ6lVkd8-dOqI0naac",
	authDomain: "shop-together-d81.firebaseapp.com",
	databaseURL: "https://shop-together-d81.firebaseio.com",
	projectId: "shop-together-d81",
	storageBucket: "shop-together-d81.appspot.com",
	messagingSenderId: "905359278134"
});

export default app;