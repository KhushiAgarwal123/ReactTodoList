import React from 'react';
import TodoItem from './TodoItem';

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todos List Works!</h3><br />
      {/* for loop condition */}
      {props.todo.length === 0 ? (
        <p>No todos to display</p> 
      ) : (
        props.todo.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />;
        })
      )}
    </div>
  );
};

export default Todos;
