import "./Controller.css";
const Controller = ({ onClickImage, onClickNum }) => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            onClickImage("../src/assets/01.jpg");
            onClickNum(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            onClickImage("../src/assets/02.jpg");
            onClickNum(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            onClickImage("../src/assets/03.jpg");
            onClickNum(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            onClickImage("../src/assets/04.jpg");
            onClickNum(4);
          }}
        >
          4
        </button>
      </div>
    </>
  );
};
export default Controller;
