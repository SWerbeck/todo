import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
import PropTypes from 'prop-types'
import { useState } from 'react'




const SingleTodo = ({toDos}) => {
    console.log(toDos)
    

    return (
       
        <div>
             
            
            {toDos.map(todo => <p key={todo.id}>{todo.toDo}</p>)}
        </div>
    )
}






export default SingleTodo