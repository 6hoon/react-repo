import { useState } from "react";

const useInput = () => {
  const [input, setInput] = useState("");
  let onChangeInput = (e) => {
    setInput(e.target.value);
  };
  return [input, onChangeInput];
};

export default useInput;
