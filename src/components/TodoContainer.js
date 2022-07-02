import React from "react";
import Todo from './Todo';

const TodoContainer = ({ todoList, setTodoList }) => { 

  const removeTodo = el => {
    const todos = [...todoList];
    todos.splice(todos.findIndex((listEl) => el.id === listEl.id), 1);
    setTodoList(todos);
  };

  const toggleStatus = el => {
    const todos = [...todoList];
    const todo = todoList.find((item) => item.id === el.id);
    todo.status = !todo.status;
    setTodoList(todos);
  }

  const todos = todoList
    .sort((a, b) => (a.status === b.status)? 0 : a.status? -1 : 1)
    .map((el) => {
      return (
        <Todo 
          key={el.id} 
          status={el.status} 
          title={el.title} 
          description={el.description} 
          removeTodo={() => removeTodo(el)}
          toggleStatus={() => toggleStatus(el)} 
        />)
    })

  return (
    <section className="section">
      <h2 className="section_heading">Your Todos</h2>
      {todos}     
    </section> 
  ) 
}

//SANDER ELSKER KJÆRESTE

export default TodoContainer;
