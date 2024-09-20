import React from 'react'
import Titulo from '../atomos/Titulo'
import Input_autoFocus from '../atomos/Input_autoFocus'
import Button_add from '../atomos/Button_add'

export default function HeadTitulo({value, onChange, onClick}) {
  return (
    <>
        <Titulo />
     <div className='input-button-container'>
       <Input_autoFocus value={value} onChange={onChange} />
       <Button_add onClick={onClick}/>
     </div>
    </>
  )
}