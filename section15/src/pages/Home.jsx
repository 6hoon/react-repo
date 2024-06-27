import DaiaryList from "../components/DiaryList";
import Header from "../components/Header";
import Button from "../components/Button";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";
import { getMonthlyData } from "../util/getMontlyData";

const Home = () => {
  // 공유된 데이터 가져오기 data === mockData
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  // 이벤트 핸들러 함수 ( 월: -1, +1 )
  const onMonth = (e) => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + e));
  };

  // data 필터링 pivotDate 들어있는 월의 data 호출
  const monthlyData = getMonthlyData(data, pivotDate);
  console.log(monthlyData);
  return (
    <>
      <div className="Home"></div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={
          <Button
            text={"< 이전"}
            colorType={"POSITIVE"}
            onClick={() => onMonth(-1)}
          />
        }
        rightChild={
          <Button
            text={"이후 >"}
            colorType={"NEGATIVE"}
            onClick={() => onMonth(1)}
          />
        }
      />
      <DaiaryList data={monthlyData} />
    </>
  );
};
export default Home;
