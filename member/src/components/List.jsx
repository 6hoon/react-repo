import "./List.css";
import Member from "./Member";
import { useState } from "react";
const List = ({ member, onUpdate, onDelete }) => {
  //
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  //
  const getFilterdData = () => {
    if (search === "") {
      return member;
    }
    return member.filter((mem) => {
      mem.name.includes(search);
    });
  };
  const filterdMember = getFilterdData();
  return (
    <>
      <div className="List">
        <h4>회원 리스트</h4>
        <div className="Search">
          <input
            value={search}
            onChange={onChangeSearch}
            type="text"
            placeholder="회원 검색"
          />
          <button>검색</button>
        </div>
        {filterdMember.map((mem) => {
          return (
            <Member
              key={mem.no}
              {...mem}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};
export default List;
