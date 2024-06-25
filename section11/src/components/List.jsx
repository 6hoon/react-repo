import MemberList from "./MemberList.jsx";
import "./List.css";
import { useState } from "react";

const List = ({ member, onDelete, onUpdate }) => {
  const [input, setInput] = useState("");
  const onSetInput = (e) => {
    setInput(e.target.value);
  };
  const getFilterMember = () => {
    if (input === "") {
      return member;
    }
    return member.filter((member) => member.name.includes(input));
  };
  const filterMember = getFilterMember();
  return (
    <>
      <div className="list">
        <h2>회원리스트</h2>
        <input
          value={input}
          placeholder="회원을 입력해주세요"
          onChange={onSetInput}
        />
        <div className="rList">
          {filterMember.map((member) => (
            <MemberList
              key={member.no}
              {...member}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default List;
