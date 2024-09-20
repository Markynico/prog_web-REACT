import React from 'react'
import Img_trash from '../atomos/Img_trash'

export default function Button_trash({ onClick }) {
  return (
    <> 
    <button className='delete-btn'
    onClick={onClick}>
    <Img_trash />
    </button>
    </>
  )
}