import React from 'react'
import '../Style/TodoCounter.css'
import {TodoContext} from '../context'
function TodoCounter() {

  const {completo, totalCompleto} = React.useContext(TodoContext);

  return <h2 className='todoCounter'>Has completado {completo} de {totalCompleto} TODOs</h2>
}

export default TodoCounter
