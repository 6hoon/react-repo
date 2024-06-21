import { useState, useRef } from "react";

const Register = () => {
  // 멤버변수 (변수:object)
  const countRef = useRef(0); // Java 의 static 변수와 유사
  const inputRef = useRef(null); // 객체를 가리키려할 때 : null
  console.log(countRef);
  console.log(inputRef);

  // 멤버변수 (변수,setter)
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  //   console.log(input);

  // 이벤트 핸들러 함수
  const onChangeAll = (e) => {
    //  e : 함수가 작동할 <input> 태그
    //  setInput({ ...input, name: e.target.value }); // 중복되면 새로운 값을 덮어씌움
    countRef.current++;
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      alert("이름을 입력");
      inputRef.current.focus();
    } else {
      alert(`${input.name} 가입 성공`);
    }
  };
  return (
    <>
      <div>
        <div>
          <input
            ref={inputRef}
            name="name"
            placeholder="이름"
            value={input.name}
            onChange={onChangeAll}
          />
        </div>
        <div>
          <input
            name="birth"
            type="date"
            value={input.birth}
            onChange={onChangeAll}
          />
        </div>
        <div>
          <select name="country" value={input.country} onChange={onChangeAll}>
            <option value="">선택</option>
            <option value="kr">한국</option>
            <option value="uk">영국</option>
            <option value="us">미국</option>
          </select>
        </div>
        <div>
          <textarea
            name="bio"
            value={input.bio}
            onChange={onChangeAll}
          ></textarea>
        </div>
        <div>
          <button onClick={onSubmit}>제출</button>
        </div>
      </div>
    </>
  );
};

export default Register;
