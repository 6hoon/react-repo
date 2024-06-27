import "./DiaryList.css";
import DiaryItem from "./DiaryItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DaiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  // sort 이벤트 등록
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  // 정렬
  // sort(원본 자체를 정렬), toSorted(정렬된 데이터를 리턴)
  const getSortData = () => {
    return data.toSorted((item1, item2) => {
      if (sortType === "oldest") {
        return item1.createDate - item2.createDate;
      } else {
        return item2.createDate - item1.createDate;
      }
    });
  };
  const sortedData = getSortData();

  return (
    <>
      <div className="DiaryList">
        <div className="menu_bar">
          <select value={sortType} onChange={onChangeSortType}>
            <option value={"latest"}>최신순</option>
            <option value={"oldest"}>등록순</option>
          </select>

          <Button
            text={"새 일기쓰기"}
            colorType={"NORMAL"}
            onClick={() => {
              nav("/new");
            }}
          />
        </div>

        <div className="list_wrapper">
          {sortedData.map((e) => (
            <DiaryItem key={e.id} {...e} />
          ))}
          ;
        </div>
      </div>
    </>
  );
};
export default DaiaryList;
