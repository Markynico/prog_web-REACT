import React, { useState } from 'react'
import Button_trash from './Button_trash'

export default function Tarea({texto, completa, onCheckboxChange, onDelete}) {

  
  

  return (
    <>
        <li className='task-container'>
          <div className='task-content'>
          <input type="checkBox"
          checked={completa}
          onChange={onCheckboxChange} 
          className='input-class' />
          <span style={{textDecoration: completa ? "line-through" : "none"}}>
          {texto}
          </span> {/* sin span funciona tmb */}
          </div>
          <Button_trash onClick={onDelete} />
          </li>
    </>
  )
}
