import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
  return (
    <>
     <h1>Lista de tareas de Marcos</h1>
     <div className='input-button-container'>
      <input type="text" className='input-button-class' autoFocus /> 
      <button className='button-add'>ADD</button>
     </div>
      
      <div className='div-container'>
      <ul>
        <li className='task-container'>
          <div className='task-content'>
          <input type="checkBox" className='input-class' />
          Tarea 1
          </div>
          <button className='delete-btn'>
          <img className='img-trash' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="eliminar" />
          </button>
          </li>
         
          <li className='task-container'>
          <div className='task-content'>
          <input type="checkBox" className='input-class' />
          <span>Tarea 2</span>
          </div>
          <button className='delete-btn'>
          <img className='img-trash' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="eliminar" />
          </button>
          </li>

          <li className='task-container'>
          <div className='task-content'>
          <input type="checkBox" className='input-class' />
          Tarea 3
          </div>
          <button className='delete-btn'>
          <img className='img-trash' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="eliminar" />
          </button>
          </li>

          <li className='task-container'>
          <div className='task-content'>
          <input type="checkBox" className='input-class' />
          <s>Tarea 4 Completada</s>
          </div>
          <button className='delete-btn'>
          <img className='img-trash' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="eliminar" />
          </button>
          </li>

          <li className='task-container'>
          <div className='task-content'>
          <input type="checkBox" className='input-class' />
          <s>Tarea 5 Completada</s>
          </div>
          <button className='delete-btn'>
          <img className='img-trash' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="eliminar" />
          </button>
          </li>
      </ul>
      </div>
      
    </>
  )
}

export default App
