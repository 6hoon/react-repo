import "./Controller.css";

const Controller = ({ onSetCount }) => {
  return (
    <>
      <div className="Controller">
        <button onClick={() => onSetCount(-1)}>-1</button>
        <button onClick={() => onSetCount(-10)}>-10</button>
        <button onClick={() => onSetCount(-100)}>-100</button>
        <button onClick={() => onSetCount(100)}>+100</button>
        <button onClick={() => onSetCount(10)}>+10</button>
        <button onClick={() => onSetCount(1)}>+1</button>
      </div>
    </>
  );
};

export default Controller;
