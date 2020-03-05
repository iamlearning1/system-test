import React from 'react';

import Button from './Button';

const Todos = ({ todos }) => {
  if (!Array.isArray(todos)) {
    return (
      <>
        {Object.keys(todos).map(i => {
          return (
            <div>
              <h5>{i}</h5>
              <ul key={i}>
                {todos[i].map(todo => {
                  return (
                    <li key={todo.id} className="list-group-item">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={todo.checked}
                        />
                        <label className="form-check-label">{todo.title}</label>
                      </div>
                      <p>{todo.description}</p>
                      <p>{todo.createdAt}</p>
                      <p>{todo.dueDate}</p>
                      <p>{todo.priority}</p>
                      <Button>Remove</Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={todo.checked}
              />
              <label className="form-check-label">{todo.title}</label>
            </div>
            <p>{todo.description}</p>
            <p>{todo.createdAt}</p>
            <p>{todo.dueDate}</p>
            <p>{todo.priority}</p>
            <Button>Remove</Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
