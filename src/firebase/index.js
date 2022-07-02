import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAScB_omUCYlpolnkDx8uOm5AdI-vfv1wQ",
  authDomain: "push-notifications-8d1cb.firebaseapp.com",
  projectId: "push-notifications-8d1cb",
  storageBucket: "push-notifications-8d1cb.appspot.com",
  messagingSenderId: "228600270170",
  appId: "1:228600270170:web:20bb94ea8abffe3e2a3763",
  measurementId: "G-5447YCCMSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
