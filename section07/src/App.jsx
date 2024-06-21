import "./App.css";
import Images from "./components/Images";
import Controller from "./components/Controller";
import { useRef, useState } from "react";

function App() {
  const [src, setSrc] = useState("../src/assets/01.jpg");
  const [num, setNum] = useState(1);

  // console.log(src);
  const onClickImage = (e) => {
    setSrc(e);
  };
  const onClickNum = (e) => {
    setNum(e);
  };
  return (
    <>
      <div className="App">
        <h1>Image load</h1>
        <section>
          <Images src={src} num={num} />
        </section>
        <section>
          <Controller onClickImage={onClickImage} onClickNum={onClickNum} />
        </section>
      </div>
    </>
  );
}

export default App;
