import { useState } from 'react';
import './App.css';
import Tarea from './components/moleculas/Tarea';
import HeadTitulo from './components/moleculas/HeadTitulo';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTareas([{ texto: inputValue, completa: false }, ...tareas]); // Agregar la nueva tarea al principio
      setInputValue(""); // Limpia el input
    }
  };

  const toggleTareaCompleta = (index) => {
    const nuevasTareas = tareas.map((tarea, i) => 
      i === index ? { ...tarea, completa: !tarea.completa } : tarea
    );
    setTareas(nuevasTareas);
  };

  const handleDelete = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <>
      <HeadTitulo value={inputValue} onChange={handleInputChange} onClick={handleAdd} />
      <div className='div-container'>
        {tareas.length === 0 ? <p className='p-class'>No hay tareas pendientes</p> : null}
        <ul>
          {tareas.map((tarea, index) => (
            <Tarea 
              key={index} 
              texto={tarea.texto} 
              completa={tarea.completa} 
              onCheckboxChange={() => toggleTareaCompleta(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
