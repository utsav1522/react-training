import React from 'react'
import withAuth from './withAuth'

const BaseComponent = () => {
  return (
    <div>
     <h2>Protected Componennt Rendered</h2>
    </div>
  )
}

export default withAuth(BaseComponent)