import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onupdate, ondelete }) => {
  // state
  const [input, setInput] = useState("");
  const onSetInput = (e) => {
    setInput(e.target.value);
  };

  //원하는검색어 맞는 필터링을 하는 함수
  const getFilterTodos = () => {
    if (input === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(input.toLowerCase());
    });
  };
  const filterTodos = getFilterTodos();

  // 랜더링 발생할때 마다 연산되는 함수(리스트 전체 개수, isDone T/F 개수)
  // * useEffect(()=>{},[]);  -> 1. 마운트가 될 때 / 2. [] 안의 인수의 값이 바뀔 때(update 될 때)
  //   ㄴ 단, 콜백함수의 return 값이 없는 hooks 이다
  //   ㄴ useMemo() -> 위의 것에 콜백함수의 return 값이 있는 hooks 이다!

  // const getAnalyzeData = () => {
  //   console.log(`getAnalyzeData totalCount ${todos.length}`);
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((e) => {
  //     return e.isDone === true;
  //   }).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return { totalCount, doneCount, notDoneCount };
  // };
  // const { totalCount, doneCount, notDoneCount } = getAnalyzeData();

  // getAnalyzeData : todos 가 랜더링 될때 도 작동하지만,
  // 검색할때도 아무 관계 없지만 필요없는 연산을 함
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log(`getAnalyzeData totalCount ${todos.length}`);
    const totalCount = todos.length;
    const doneCount = todos.filter((e) => {
      return e.isDone === true;
    }).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <>
      <div className="List">
        <h2>Todo List 🐱‍🐉</h2>
        <div>
          <span>TOTAL : {totalCount}</span>
          <br />
          <span>DONE : {doneCount}</span>
          <br />
          <span>NOT DONE: {notDoneCount}</span>
        </div>
        <input
          value={input}
          placeholder="검색어를 입력해주세요"
          onChange={onSetInput}
        />
        <div>
          {filterTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onupdate={onupdate}
              ondelete={ondelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
