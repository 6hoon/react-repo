import "./App.css";
import Blub from "./components/Blub";
import Counter from "./components/Counter";

// root component
function App() {
  // 멤버변수 (상태변화시키는 변수)

  // useState의 변수 타입이 a 의 타입 결정 -> 멤버변수 / setters 도 생김
  // count : 멤버변수 / setCount : 함수 (setter)
  // useState 안의 값이 바뀌면 알아서 리랜더링이 되기에 실제 화면도 바뀜

  return (
    <>
      <Blub />
      <Counter />
    </>
  );
}

export default App;
