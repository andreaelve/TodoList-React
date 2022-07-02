const Todo = ({ status, title, description, toggleStatus, removeTodo }) => {
  const handleClick = (e) => {
    if(e.target.type === 'submit'){
      return removeTodo();
    }
    toggleStatus()
  }

  return (
    <div className={`card ${status ? 'done' : 'not-done'}`} onClick={(e) => handleClick(e)}>
      <h3 className="card_heading">{title}</h3>
      <p className="card_description">{description}</p>
      <div className="card_bottom">
        <span className={status ? 'card_status-done' : 'card_status'}>
          {status ? 'DONE' : 'NOT DONE'}
        </span>
        {status && <button className="card_btn-remove">REMOVE</button>}
      </div>
    </div>
  );
}

export default Todo;
