import React from 'react'
import {Link} from 'react-router-dom';
function UnauthenticatedPage() {
  return (
    <div>
      <h2>You Entered the Wrong creddentials....</h2>
      <Link to= "/">Go back to Home</Link>
    </div>
  )
}

export default UnauthenticatedPage
