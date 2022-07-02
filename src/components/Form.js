import React, { useEffect, useRef } from "react";

const Form = ({ todoList, setTodoList }) => {
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todoList));
    console.log(todoList);
  }, [todoList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputTitle.current.value;
    const description = inputDescription.current.value;
    if (!title) {
      return;
    }

    inputTitle.current.value = '';
    inputDescription.current.value = '';

    const todos = [...todoList];
    todos.push({
      title, description, status: false, id: Date.now(),
    });
    setTodoList(todos);
  }

  return (
    <form className='form card'>
      <h2 className="form_heading">Register new todo</h2>
      <input ref={inputTitle} type="text" placeholder="Title" id="txtTodoItemTitle" data-testid="txtTodoItemTitle" className="form_input"/>
      <input ref={inputDescription} type="text" placeholder="Description" id="description-input" className="form_input"/>
      <div className="form_bottom">
        <button id="btnAddTodo" data-testid="btnAddTodo" className="form_btn" onClick={handleSubmit}>ADD</button>
      </div>
    </form>
  )
}

export default Form;