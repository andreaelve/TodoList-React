import React, { useRef } from "react";
import '../styles/style.css';

const Form = ({ setTodoList }) => {
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputTitle.current.value;
    const description = inputDescription.current.value;
    if (!title) {
      return;
    }
    inputTitle.current.value = '';
    inputDescription.current.value = '';
    setTodoList((prevState) => {
      prevState.push({
        title, description, status: false, id: Date.now(),
      });
      return [...prevState];
    });
  }

  return (
    <form className='form card'>
      <h2 className="form_heading">Register new todo</h2>
      <input ref={inputTitle} type="text" placeholder="Title" id="txtTodoItemTitle" data-testid="txtTodoItemTitle" className="form_input"/>
      <input ref={inputDescription} type="text" placeholder="Description" id="description-input" className="form_input"/>
      <div className="form_bottom">
        <button id="btnAddTodo" data-testid="btnAddTodo" className="form_btn" onClick={(e) => handleSubmit(e)}>ADD</button>
      </div>
    </form>
  )
}

export default Form;