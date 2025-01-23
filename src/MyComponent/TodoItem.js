import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  if (!todo) {
    return <div>No Todo Item Found</div>;
  }

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button 
        className="btn btn-sm btn-danger" 
        style={{ backgroundColor: 'red', color: 'white' }} 
        onClick={() => onDelete(todo)} 
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
