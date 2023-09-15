import { initializeApp, getApps } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAM2ahiLwMTKotso7EAbCL0Y5knMcIdfs",
  authDomain: "quiz-app-2710b.firebaseapp.com",
  projectId: "quiz-app-2710b",
  storageBucket: "quiz-app-2710b.appspot.com",
  messagingSenderId: "736379101536",
  appId: "1:736379101536:web:f2b690d40f93f6c5c23e05",
  measurementId: "G-WFK4GP2DR8"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;