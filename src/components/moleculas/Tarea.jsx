import React from 'react'
import Button_trash from './Button_trash'
import { text } from '@fortawesome/fontawesome-svg-core'


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
