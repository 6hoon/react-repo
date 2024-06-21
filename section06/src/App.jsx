import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // 핸들러 함수
  const onSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller onSetCount={onSetCount} />
        </section>
      </div>
    </>
  );
}

export default App;
