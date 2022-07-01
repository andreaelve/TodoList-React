import React from "react";
import Todo from './Todo';
import '../styles/style.css';

const TodoContainer = ({ todoList }) => { 
  const openTodos = todoList
      .filter(el => el.status)
      .map((el, i) => <Todo key={i} status={el.status} title={el.title} description={el.description} />)

  const doneTodos = todoList
    .filter(el => !el.status)
    .map((el, i) => <Todo key={i} status={el.status} title={el.title} description={el.description} />);

  return (
    <section className="section">
      <h2 className="section_heading">Your Todos</h2>
      {openTodos}
      {doneTodos}      
    </section>
  )
}

export default TodoContainer;