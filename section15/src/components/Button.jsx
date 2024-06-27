import "./Button.css";

//공통의 컴포넌트: text, colorType, onClick
const Button = ({ text, colorType, onClick }) => {
  return (
    <>
      <button className={`Button Button_${colorType}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};
export default Button;
