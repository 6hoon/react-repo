import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={onClickCount}>+ plus</button>
        <button
          onClick={() => {
            if (count === 0) {
              return;
            } else {
              setCount(count - 1);
            }
          }}
        >
          - minus
        </button>
      </div>
    </>
  );
};
export default Counter;
