import React from 'react'

const Text = ({...props}) => {
  return (
    <h3 style={{margin:'20px 30px', fontFamily:'Poppins'}}>{props.content}</h3>
  )
}

export default Text