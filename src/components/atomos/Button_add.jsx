import React from 'react'

export default function Button_add({onClick}) {
  const abcd = () => {
    console.log("se apreto el boton")
    alert("se apreto el boton")
  }

  return (
    <>  
    <button className='button-add' onClick={onClick}>ADD</button>
    </>
  )
}