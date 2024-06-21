// 사용자가 만든 useState Hooks 컴포넌트
import useInput from "../hooks/useInput";

// const state = useState(0);
// -> 1. 외부에서 선언 X
// -> 2. 구문 안에서 선언X
const HookExam = () => {
  const [inputName, onChangeInputName] = useInput(); // return 값에 맞게, 이름 상관 없음-------*
  const [inputEmail, onChangeInputEmail] = useInput(); // return 값에 맞게, 이름 상관 없음-------*

  console.log(inputName);
  console.log(inputEmail);
  return (
    <>
      <div>
        <input value={inputName} onChange={onChangeInputName} />
        <br />
        <input value={inputEmail} onChange={onChangeInputEmail} />
      </div>
    </>
  );
};
export default HookExam;
