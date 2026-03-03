import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "Your Key",
    authDomain: "WhatsappX-2-372312.firebaseapp.com",
    projectId: "WhatsappX-2-372312",
    storageBucket: "WhatsappX-2-372312.appspot.com",
    messagingSenderId: "225921394239",
    appId: "1:225921394239:web:66e9a0b9cd976ec204ba8a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }
