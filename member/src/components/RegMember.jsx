import "./RegMember.css";
import { useState, useRef } from "react";

const RegMember = ({ regMem }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const onSetId = (e) => {
    setId(e.target.value);
  };
  const onSetPw = (e) => {
    setPw(e.target.value);
  };
  const onSetName = (e) => {
    setName(e.target.value);
  };
  const onSetEmail = (e) => {
    setEmail(e.target.value);
  };
  //
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onsubmit();
    }
  };
  //
  const onSubmit = (e) => {
    e.preventDefault();
    if (id === "") {
      alert("id 입력");
      idRef.current.focus();
      return;
    } else if (pw === "") {
      alert("pw 입력");
      pwRef.current.focus();
      return;
    } else if (name === "") {
      alert("name 입력");
      nameRef.current.focus();
      return;
    } else if (email === "") {
      alert("email 입력");
      emailRef.current.focus();
      return;
    }
    regMem(id, pw, name, email);
    setId("");
    setPw("");
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="RegMember">
        <form>
          <input
            type="text"
            value={id}
            onKeyDown={onKeydown}
            onChange={onSetId}
            placeholder="id"
          />
          <input
            type="password"
            value={pw}
            onKeyDown={onKeydown}
            onChange={onSetPw}
            placeholder="pw"
          />
          <input
            type="text"
            value={name}
            onKeyDown={onKeydown}
            onChange={onSetName}
            placeholder="name"
          />
          <input
            type="email"
            value={email}
            onKeyDown={onKeydown}
            onChange={onSetEmail}
            placeholder="email"
          />
          <button onClick={onSubmit}>회원가입</button>
        </form>
      </div>
    </>
  );
};
export default RegMember;
