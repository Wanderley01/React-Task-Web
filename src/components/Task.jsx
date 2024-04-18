import React from 'react';

const Task = ({ dado }) => {
    return (
        <div className='taskComponent'>
           <div className="task">
                <div className='conponent'>
                  <div className='titleecate'>
                  <p>{dado.text}</p>
                  <p>({dado.categoria})</p>
                  </div>
                  
                  <div className='botoesIsComp'>
                      <button>
                        Finalizar
                      </button>
                      <button>
                          X
                      </button>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Task;