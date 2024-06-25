import './List.css';
import TodoItem from "./TodoItem";
import { useState } from 'react';

const List = ({todos, onupdate, ondelete})=>{
  const [input, setInput] = useState('');
  const onSetInput = (e)=>{
    setInput(e.target.value); 
  };
  //원하는검색어 맞는 필터링을 하는 함수
  const getFilterTodos = ()=>{
    if(input === ''){
      return todos; 
    }
    return todos.filter((todo)=>{
       return todo.content.toLowerCase().includes(input.toLowerCase());
    });
  }; 

  const filterTodos = getFilterTodos(); 

  return (
    <>
    <div className="List">
     <h2>Todo List 🐱‍🐉</h2>
     <input value={input} placeholder="검색어를 입력해주세요"  onChange={onSetInput}/>
     <div>
      {filterTodos.map((todo)=> <TodoItem key={todo.id} {...todo} onupdate={onupdate} ondelete={ondelete}/> )}
     </div>
    </div>
    </>
  ); 
};

export default List; 