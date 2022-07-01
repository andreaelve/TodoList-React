import React from "react";
import '../styles/style.css';

const Todo = ({status, title, description}) => {
  return (
    <div className={`card ${status ? 'done' : 'not-done'}`}>
      <h3 className="card_heading">{title}</h3>
      <p className="card_description">{description}</p>
      <div className="card_bottom">
        <span className="${el.status === 'done' ? 'card_status-done' : 'card_status'}">
          {status ? 'DONE' : 'NOT DONE'}
        </span>
        {status && <button className="card_btn-remove">REMOVE</button>}
      </div>
    </div>
  )
}

export default Todo;