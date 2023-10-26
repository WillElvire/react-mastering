import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPTAx64Qe6a81ohugqRDUUxoD4Bx51zpM",
    authDomain: "safepay-f3363.firebaseapp.com",
    projectId: "safepay-f3363",
    storageBucket: "safepay-f3363.appspot.com",
    messagingSenderId: "133885577239",
    appId: "1:133885577239:web:2c7c8c8014182152e47452",
    measurementId: "G-N2PGN8RTM7"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);