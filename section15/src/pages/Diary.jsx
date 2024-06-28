import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getStringDate } from "../util/getStringDate";
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  //const curDiaryItem = useDiary(params.id);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  // useEffect 처리 ===================================
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);
  // ==================================================

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createDate, emotionId, content } = curDiaryItem;
  const title = getStringDate(new Date(createDate));

  return (
    <div>
      <Header
        title={`${title} 보기`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
