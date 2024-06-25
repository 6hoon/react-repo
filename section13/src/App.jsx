import "./App.css";
import { useRef, useReducer, useCallback } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

//공유자료(데이타베이스가져올것임)
const todoData = [
  {
    id: 0,
    isDone: false,
    content: "자바 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "react 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "mvc2 프로젝트하기",
    date: new Date().getTime(),
  },
];

// reducer
function reducer(todos, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todos];
    case "UPDATE":
      return todos.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.data);
    default:
      return todos;
  }
}
// App
function App() {
  //useReducer
  const [todos, dispatch] = useReducer(reducer, todoData);
  const idRef = useRef(3);

  const oncreate = useCallback((value) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: value,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onupdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  }, []);

  const ondelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  }, []);

  // const oncreate = (value) => {
  //   dispatch({
  //     type: "CREATE",
  //     data: {
  //       id: idRef.current++,
  //       isDone: false,
  //       content: value,
  //       date: new Date().getTime(),
  //     },
  //   });
  // };

  //오늘의할일을 완성했을경우 idDone = true, false 변경해주는 역할

  // const onupdate = (targetId) => {
  //   dispatch({
  //     type: "UPDATE",
  //     data: targetId,
  //   });
  // };

  //삭제기능을만든다.
  // const ondelete = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     data: targetId,
  //   });
  // };

  return (
    <>
      <div className="App">
        <Header />
        <Editor oncreate={oncreate} />
        <List todos={todos} onupdate={onupdate} ondelete={ondelete} />
      </div>
    </>
  );
}

export default App;
