import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8XB5N0_mn3_Z4tMTFPAamqKe534FKhNY",
  authDomain: "cyclebreeze-17d73.firebaseapp.com",
  projectId: "cyclebreeze-17d73",
  storageBucket: "cyclebreeze-17d73.firebasestorage.app",
  messagingSenderId: "154199888348",
  appId: "1:154199888348:web:ad8397f69b03d426a63f19",
  measurementId: "G-W2556RYJB5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };