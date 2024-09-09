import React, { useState } from 'react'
import Button_trash from './Button_trash'

export default function Tarea({texto}) {
  

  return (
    <>
        <li className='task-container'>
          <div className='task-content'>
          <input type="checkBox" className='input-class' />
          <span>{texto}</span> {/* sin span funciona tmb */}
          </div>
          <Button_trash />
          </li>
    </>
  )
}
