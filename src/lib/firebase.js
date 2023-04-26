import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import {seedDatabase} from '../seed';
// call seed file sed file only once


const config = {
    apiKey: "AIzaSyD5k3bl8HyzjmwSX3Pd5alntl8f8mdVCQc",
    authDomain: "instagram-clone-react-3d149.firebaseapp.com",
    projectId: "instagram-clone-react-3d149",
    storageBucket: "instagram-clone-react-3d149.appspot.com",
    messagingSenderId: "1046489878311",
    appId: "1:1046489878311:web:c7a19f23cce766748a2302"
  };

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

// seedDatabase(firebase);
export {firebase, FieldValue} 