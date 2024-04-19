import { useState } from 'react'
import "./App.css";

import Task from './components/Task';
import FormTask from './components/FormTask';


function App() {
  const [dados, setDados] = useState([
    
  ])

  const addTask = (text, categoria) => {

    const newTasks = [...dados, { 
      id: Math.floor(Math.random() * 10000),
      text: text,
      categoria: categoria,
      isComplete: false
    }];

    setDados(newTasks);
  }

  return (
    <>
      <div className="app">

        <h1 className="tituloMaior">
          Lista de Tarefas Rápidas
        </h1>

        <FormTask addTask={addTask} />

        <div className="listaDeTarefas">
          <div className='tarefa'>
            {dados.map((dado) => (
              <Task key={dados.id} dado={dado} />
            ))}
          </div>
        </div>

         
          
      </div>
    </>
  )
}

export default App
