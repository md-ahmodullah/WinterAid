// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUN8AuEVHcf6TTD0ZPTVIe17JRvK_DurI",
  authDomain: "assignment-09-1c938.firebaseapp.com",
  projectId: "assignment-09-1c938",
  storageBucket: "assignment-09-1c938.firebasestorage.app",
  messagingSenderId: "986771360210",
  appId: "1:986771360210:web:17cb82cce414b22dbc600b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
