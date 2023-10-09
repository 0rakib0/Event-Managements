// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjJxc7IgXE5JNJXmlvsrhVxQg7cE8Uw_0",
  authDomain: "event-management-45276.firebaseapp.com",
  projectId: "event-management-45276",
  storageBucket: "event-management-45276.appspot.com",
  messagingSenderId: "299059050848",
  appId: "1:299059050848:web:fd2fe293170bec10254605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;