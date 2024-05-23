import React from 'react';

const Task = ({ dado, removerTask, completarTask }) => {


    
    
    return (
        <div className='taskComponent' style={{textDecoration: dado.isCompleted ? "line-through" : "" }} >
           <div className="task">
                <div className='conponent'>
                  <div className='titleecate'>
                  <p >{dado.text}</p>
                  <p>({dado.categoria})</p>
                  </div>
                  
                  <div className='botoesIsComp'>
                      <button onClick={() => completarTask(dado.id)}>
                        Finalizar
                      </button>
                      <button onClick={() => removerTask(dado.id)}>
                          X
                      </button>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Task;