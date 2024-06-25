import './RegForm.css'
import {useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
const RegForm = ({onReg}) => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const idRef = useRef(null);
  const pwdRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const onSetId = (e) => {
    setId(e.target.value);
  }
  const onSetPwd = (e) => {
    setPwd(e.target.value);
  }
  const onSetName = (e) => {
    setName(e.target.value);

  }
  const onSetEmail = (e) => {
    setEmail(e.target.value);

  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (id === '') {
      alert("아이디를 입력해주세요!");
      idRef.current.focus();
      return;
    } else if (pwd === '') {
      alert("비밀번호를 입력해주세요!");
      pwdRef.current.focus();
      return;
    } else if (name === '') {
      alert("이름을 입력해주세요!");
      nameRef.current.focus();
      return;
    } else if (email === '') {
      alert("이메일을 입력해주세요!");
      emailRef.current.focus();
      return;
    }
    onReg(id, pwd, name, email);
    setId('');
    setPwd('');
    setName('');
    setEmail('');
  }
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  return (
      <div className="regform">
        <form>
          <input onKeyDown={onKeyDown} value={id}  onChange={onSetId} type="text" placeholder="아이디"/>
          <input onKeyDown={onKeyDown} value={pwd} onChange={onSetPwd} type="password" placeholder="비밀번호"/>
          <input onKeyDown={onKeyDown} value={name} onChange={onSetName} type="text" placeholder="이름"/>
          <input onKeyDown={onKeyDown} value={email} onChange={onSetEmail} type="email" placeholder="이메일"/>
          <button onClick={onSubmit}>회원가입</button>
        </form>
      </div>
  )
}
export default RegForm;