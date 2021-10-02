import { initializeApp } from 'firebase/app';
import { getDatabase ,onValue , ref } from "firebase/database";


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxw65VwUaDyjG1X68yZFOsfXVFEfA39wM",
  authDomain: "rich-compiler-296319.firebaseapp.com",
  databaseURL: "https://rich-compiler-296319-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "rich-compiler-296319",
  storageBucket: "rich-compiler-296319.appspot.com",
  messagingSenderId: "848271848615",
  appId: "1:848271848615:web:4306f037b67d9425f0d782",
  measurementId: "G-07GDHCL5DM"
};

const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);



export  { db , onValue , ref};