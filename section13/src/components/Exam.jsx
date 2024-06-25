import { useReducer } from "react";

// 3. dispatch 속 객체를 action 으로 받아 처리한다
function reducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return state + action.data;
    case "MINUS":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0); // reducer

  // ================================================
  const onPlus = () => {
    //
    dispatch({
      // 2. reducer 로 전달한다
      // 멤버변수
      type: "PLUS",
      data: 1,
    });
  };
  const onMinus = () => {
    dispatch({
      type: "MINUS",
      data: 1,
    });
  };

  // ================================================
  return (
    <>
      <div>
        <h1>{state}</h1>
        <div className="button">
          {/* 1. onclick 으로 함수 호출 */}
          <button onClick={onPlus}>+</button>
          <button onClick={onMinus}>-</button>
        </div>
      </div>
    </>
  );
};
export default Exam;
