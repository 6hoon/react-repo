import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext, DiaryDispatchContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const { onDelete } = useContext(DiaryDispatchContext);

  const [curDiaryItem, setCurDiaryItem] = useState();

  //🍳 화면 실행 시 바로 호출 되는 함수는 별도로 useEffect 로 처리해야한다 -> 마운트 시켜야한다
  // 전체 데이터에서 해당되는 id를 가지고 객체를 찾아야한다
  useEffect(() => {
    const curDiaryItem = data.find((i) => String(i.id) === String(params.id));

    if (!curDiaryItem) {
      alert("존재하지 않는 항목입니다");
      nav("/", { replace: true }); // -> 랜더링이 끝나기 전에 작동하면 에러 -> useEffect
    }
    setCurDiaryItem(curDiaryItem);
  }, [params.id, data]); // 마운트 될떄 한 번 작동

  // 삭제하기 : 랜더링이 끝난 이후 작동할 것이기 떄문에 useEffect 처리할 필요 없다
  // 즉, event 와 연결된 것은 useEffect 처리할 필요 없다
  const onClickDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <>
      <div className="New">
        <Header
          title={"일기 수정하기"}
          leftChild={
            <Button
              text={"< 뒤로가기"}
              colorType={"NORMAL"}
              onClick={() => {
                nav(-1);
              }}
            />
          }
          rightChild={
            <Button
              text={"삭제하기"}
              colorType={"NEGATIVE"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initItem={curDiaryItem} />
      </div>
    </>
  );
};
export default Edit;
