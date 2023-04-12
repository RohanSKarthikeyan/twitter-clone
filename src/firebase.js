
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBlp7nF1i08sEG1cY5cKTycLhKBDFwz0Zo",
  authDomain: "twitter-clone-e1485.firebaseapp.com",
  projectId: "twitter-clone-e1485",
  storageBucket: "twitter-clone-e1485.appspot.com",
  messagingSenderId: "79763658167",
  appId: "1:79763658167:web:2c44df9207eef034804432",
  measurementId: "G-QG20TPEYYS"
};

const app = initializeApp(firebaseConfig)


export default getFirestore();

