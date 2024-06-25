import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

//공유자료(데이타베이스가져올것임)
const todoData = [
  {
    id:0,
    isDone: false,
    content: '자바 공부하기',
    date: new Date().getTime(),
  },{
    id:1,
    isDone: false,
    content: 'react 공부하기',
    date: new Date().getTime(), 
  },{
    id:2,
    isDone: false,
    content: 'mvc2 프로젝트하기',
    date: new Date().getTime(),
  },
];
function App() {
  const [todos, setTodos] = useState(todoData)
  const idRef = useRef(3);

  const oncreate = (value)=>{
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: value,
      date: new Date().getTime(),
    }; 
    setTodos([newTodo, ...todos]); 
  };

  //오늘의할일을 완성했을경우 idDone = true, false 변경해주는 역할
  const onupdate = (targetId)=>{
    setTodos( todos.map((todo)=> todo.id === targetId ?({...todo, isDone: !todo.isDone}):(todo) )); 
  };

  //삭제기능을만든다.
  const ondelete = (targetId)=>{
    setTodos(todos.filter((todo)=> todo.id !== targetId )); 
  }; 

  return (
    <>
    <div className="App">
      <Header/>
      <Editor oncreate={oncreate}/>
      <List todos={todos} onupdate={onupdate} ondelete={ondelete} />
    </div>
      
    </>
  )
}

export default App
