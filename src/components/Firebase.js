import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABoQn4GIGuikqoVT9T7yZBF9PrYq1Z3GY",
  authDomain: "ecommerce-reactproject-aff8d.firebaseapp.com",
  databaseURL: "https://ecommerce-reactproject-aff8d.firebaseio.com",
  projectId: "ecommerce-reactproject-aff8d",
  storageBucket: "ecommerce-reactproject-aff8d.appspot.com",
  messagingSenderId: "828481944022",
  appId: "1:828481944022:web:ffbb15b8f2259d53510c77",
  measurementId: "G-LZX9677G54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };