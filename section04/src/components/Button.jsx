// function Button(){} -> 생성자

// 다른 컴포넌트로부터 값을 받을때 매개변수로 props
const Button = ({
  // 멤버변수
  color = "black",
  text = "BUTTON",
  name = "kh",
  children,
}) => {
  // 멤버함수 (이벤트 핸들러 함수)
  //   const onClickButton = () => {
  //     alert(text);
  //   };

  return (
    <button style={{ color: color }} onClick={() => alert(text)}>
      {text}-{name.toUpperCase()}
      {children}
    </button>
  );
};

// 디폴트 프롭스
// Button.defaultProps = {
//   color: "black",
//   text: "BUTTON",
//   name: "kh",
// };

export default Button;
