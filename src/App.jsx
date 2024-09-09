import { useState } from 'react'
import './App.css'
import Tarea from './components/moleculas/Tarea'
import HeadTitulo from './components/moleculas/HeadTitulo'

function App() {

  {/*
    Atomic design para el tp Manos a la obra 2
  */}

  return (
    <>

      <HeadTitulo />
      <div className='div-container'>
      <ul>
        <Tarea texto={"Tareas pasadas por prop"}/>
        <s> <Tarea texto="Tarea 1"></Tarea> </s>
        <Tarea texto={"Tarea 2"}></Tarea>
        <Tarea texto={"Tarea 3"}></Tarea>
        <Tarea texto={"Tarea 4"}></Tarea>
        <s><Tarea texto={"Tarea 5"}></Tarea> </s> 
      </ul>
      </div>
    </>
  )
}

export default App