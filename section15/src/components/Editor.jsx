import Button from "./Button";
import EmotionItem from "./EmotionItem";
import "./Editor.css";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = () => {
    onCreate(new Date().getTime(), 1, "qwer");
  };
  return (
    <>
      <div className="Editor">
        <section className="date_section">
          <h3>오늘의 날짜</h3>
          <input type="date" />
        </section>
        <section className="emotion_section">
          <h3>오늘의 감정</h3>
          <div className="emotion_list_wrapper">
            <EmotionItem />
            <EmotionItem />
            <EmotionItem />
            <EmotionItem />
            <EmotionItem />
          </div>
        </section>
        <section className="content_section">
          <h3>오늘의 일기</h3>
          <textarea placeholder="내용 입력"></textarea>
        </section>
        <hr />
        <section className="button_section">
          <Button text={"취소"} colorType={"NEGATIVE"} />
          <Button text={"저장"} colorType={"POSITIVE"} onClick={onSubmit} />
        </section>
      </div>
    </>
  );
};
export default Editor;
