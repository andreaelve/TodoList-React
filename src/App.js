import React, { useState } from 'react';
import Form from './components/Form';
import TodoContainer from './components/TodoContainer';
import './styles/style.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App main">
      <h1 className="main_heading">TODO LIST</h1>
      <Form setTodoList={setTodoList}/>
      {todoList.length > 0 && <TodoContainer todoList={todoList}/>}
    </div>
  );
}

export default App;
