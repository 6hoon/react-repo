import './App.css'
import Header from "./components/Header.jsx";
import RegForm from "./components/RegForm.jsx";
import List from "./components/List.jsx";
import {useRef, useState} from "react";

//공유자료
const MemberData = [
  {
    no: 0,
    idCheck: false,
    id: 'hong',
    pwd: '1234',
    name: '홍길동',
    email: 'hong@gmail.com',
    date: new Date().getTime(),
  }, {
    no: 1,
    idCheck: false,
    id: 'kim',
    pwd: '1234',
    name: '김철수',
    email: 'kim@gmail.com',
    date: new Date().getTime(),
  }, {
    no: 2,
    idCheck: false,
    id: 'lee',
    pwd: '1234',
    name: '이영희',
    email: 'lee@gmail.com',
    date: new Date().getTime(),
  }
    ]
function App() {
  const[member, setMember] = useState(MemberData);
  const idRef = useRef(3);
  const onReg = (id, pwd, name, email) => {
    const newMember = {
      no: idRef.current++,
      idCheck: false,
      id: id,
      pwd: pwd,
      name: name,
      email: email,
      date: new Date().getTime(),
    };
    setMember([newMember, ...member]);
  }

  const onUpdate = (targetId) => {
    setMember(member.map((member) =>
      member.no === targetId ? ({...member, idCheck: !member.idCheck}) : (member)))
  }
  const onDelete = (targetId) => {
    setMember(member.filter((member) => member.no !== targetId));
  }
  return (
    <div className="app">
      <Header/>
      <RegForm onReg ={onReg}/>
      <List member={member} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
