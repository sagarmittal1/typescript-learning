import React from 'react';

const NewTodo = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
