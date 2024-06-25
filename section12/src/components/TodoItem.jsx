import './TodoItem.css'; 

const TodoItem = ({id,isDone,content,date, onupdate, ondelete})=>{

  const onChangeCheckbox = ()=>{
    onupdate(id); 
  }; 

  const onClickDelete = ()=>{
    ondelete(id); 
  }; 

  return (
    <>
      <div className="TodoItem">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
        <span className="content">{content}</span>
        <span className="date">{new Date(date).toLocaleDateString()}</span>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </>
  ); 
};

export default TodoItem; 