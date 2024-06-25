import { useRef, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import RegMember from "./components/RegMember";
import { reducer } from "./util/reducer";
//
const memberData = [
  {
    no: 0,
    idCheck: false,
    id: "qwe",
    pw: "qwe",
    name: "홍길동",
    email: "hong@google.com",
    date: new Date().getTime(),
  },
  {
    no: 1,
    idCheck: false,
    id: "asd",
    pw: "asd",
    name: "김길동",
    email: "kim@google.com",
    date: new Date().getTime(),
  },
  {
    no: 2,
    idCheck: false,
    id: "zxc",
    pw: "zxc",
    name: "이길동",
    email: "lee@google.com",
    date: new Date().getTime(),
  },
];
// App
function App() {
  const [member1, setMember] = useState(memberData);
  const [member, dispatch] = useReducer(reducer, memberData);
  //
  const noRef = useRef(3);
  const regMem = (id, pw, name, email) => {
    dispatch({
      type: "REGISTER",
      data: {
        no: noRef.current++,
        idCheck: false,
        id: id,
        pw: pw,
        name: name,
        email: email,
        date: new Date().getTime,
      },
    });
  };

  const onUpdate = (e) => {
    dispatch({
      type: "UPDATE",
      data: e,
    });
  };

  const onDelete = (e) => {
    dispatch({
      type: "DELETE",
      data: e,
    });
  };

  return (
    <>
      <div className="App">
        <Header />
        <RegMember regMem={regMem} />
        <List member={member} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
