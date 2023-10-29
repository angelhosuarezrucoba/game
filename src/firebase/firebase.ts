import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDemPAeBSqBFrjDVBDa858koLpOWvTN3_s",
    authDomain: "anelicy.online",
    projectId: "gestor-351823",
    storageBucket: "gestor-351823.appspot.com",
    messagingSenderId: "748856653301",
    appId: "1:748856653301:web:053f7d58490dbd526c5cbc",
    measurementId: "G-JTLVKQ6MW9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// getStorage(app);
