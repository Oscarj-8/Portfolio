import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA28HXAhqtIq_PQOiG93RSQcOEkvHc-1hg",
  authDomain: "portfolio-5e8a8.firebaseapp.com",
  projectId: "portfolio-5e8a8",
  storageBucket: "portfolio-5e8a8.appspot.com",
  messagingSenderId: "384026082146",
  appId: "1:384026082146:web:cc60ca38d54734bb46ca3b",
  measurementId: "G-N05N9XF4G9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
