import React from 'react'

function login() {
  return (
    <div>
      <form action="" className='flex flex-col'>
        <div>
          <label htmlFor="email" className='text-3xl text-red-50'>Email</label>
          <input type="text" name="email" className='text-2xl' id="email" placeholder="email" />
        </div>

        <div>
          <label htmlFor="password" className='text-3xl'>Password</label>
          <input type="password" name="password" className='text-2xl' id="password" placeholder="Password" />
        </div>
      </form>
    </div>
  )
}

export default login



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDUawBSngAR_r0_FeOt4TGQopMRdYPPXBk",
//   authDomain: "clone-75ba9.firebaseapp.com",
//   projectId: "clone-75ba9",
//   storageBucket: "clone-75ba9.appspot.com",
//   messagingSenderId: "355390996118",
//   appId: "1:355390996118:web:f75c4f31776cb5cfa1ccb7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);