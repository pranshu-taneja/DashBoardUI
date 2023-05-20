import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDUawBSngAR_r0_FeOt4TGQopMRdYPPXBk",
  authDomain: "clone-75ba9.firebaseapp.com",
  projectId: "clone-75ba9",
  storageBucket: "clone-75ba9.appspot.com",
  messagingSenderId: "355390996118",
  appId: "1:355390996118:web:f75c4f31776cb5cfa1ccb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // getAuth() is a function that returns an object that has a property called signInWithPopup

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const photo = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("photo", photo);
      console.log(result.user)
    })
    .catch((error) => {
      console.log(error);
    });
};
