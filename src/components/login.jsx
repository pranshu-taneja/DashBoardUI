import React from 'react'
import { signInWithGoogle } from '../Firebase'
import { Link } from 'react-router-dom'

function login() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <hr />
      <Link to={'/Dashboard'}>Dashboard</Link>
    </div>
  )
}

export default login
