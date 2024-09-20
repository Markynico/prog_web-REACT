import React from 'react'
import { useState } from 'react'

export default function Input_autoFocus({value, onChange}) {
  return (
    <>
    <input type="text" value={value} onChange={onChange} className='input-button-class' autoFocus />
    </>
  )
}
