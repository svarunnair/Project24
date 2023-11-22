
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"




const firebaseConfig = {
  apiKey: "AIzaSyA9HczWkH6Sz1rU7888FtYaG8M2bBD_rCU",
  authDomain: "project-2-97ed7.firebaseapp.com",
  projectId: "project-2-97ed7",
  storageBucket: "project-2-97ed7.appspot.com",
  messagingSenderId: "851971680925",
  appId: "1:851971680925:web:fd04b1335f70cbee884274"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}
