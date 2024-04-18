import React from 'react'
import { useState } from 'react'

const FormTask = ({ addTask }) => {
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');

    const guardarTarefas = (e) => {
        e.preventDefault();
        if(!valor || !categoria) return;
        addTask(valor,categoria);
        setValor('');
        setCategoria('');
        
    };

  return (
    <div className='formTask'>
        <h2>
            Criar Tarefa
        </h2>

        <form onSubmit={guardarTarefas}>
            <input type="text" value={valor} className="nome" placeholder='Digite o Nome da Tarefa' onChange={(e) => setValor(e.target.value)}/>

            <select  value={categoria} className='tipoDeTarefa' onChange={(e) => setCategoria(e.target.value)}>
                <option value="">
                    Selecione uma Categoria
                </option>
                <option value="Faculdade">
                    Faculdade
                </option>
                <option value="Trabalho">
                    Trabalho
                </option>
                <option value="Lazer">
                    Lazer
                </option>
                <option value="Estudo">
                    Estudo
                </option>
            </select>

            <button type='submit' className='add'>
                Adicionar 
            </button>
            
            <button className='remover'>
                X
            </button>

        </form>
    </div>
  )
}

export default FormTask
