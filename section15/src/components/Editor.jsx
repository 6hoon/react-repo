import Button from "./Button";
import EmotionItem from "./EmotionItem";
import "./Editor.css";
import { useContext, useState, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

// 감정데이터를 입력
const emotionList = [
  { emotionId: 1, emotionName: "매우 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "매우 나쁨" },
];

const Editor = ({ initItem }) => {
  const { onCreate, onUpdate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const [input, setInput] = useState({
    // 컴포넌트화 될 때 바로 값이 세팅 되어야함 -> useEffect
    createDate: new Date(),
    emotionId: 1,
    content: "",
  });

  // iniItem 이 세팅 될 때 한번 실행
  // New 에서 넘어올 땐 initItem : undefined -> useEffect 작동하지 않고 초기값만 줌
  useEffect(() => {
    if (initItem) {
      // null, undefined 걸러냄
      setInput({
        ...initItem,
        createDate: new Date(initItem.createDate),
      });
    }
  }, [initItem]);

  // 이벤트 처리 전송 onSubmit
  const onSubmit = (input) => {
    if (initItem) {
      onUpdate(input.id, input.createDate, input.emotionId, input.content);
    } else {
      onCreate(input.createDate, input.emotionId, input.content);
    }
    // 1. 메인화면으로, 2. 뒤로가기 방지 : { replace: true }
    nav("/", { replace: true });
  };

  // 값 set 하는 함수
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.name === "createDate") {
      value = new Date(e.target.value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  // 날짜를 문자열로 바꾸는 함수  yyyy-mm-dd
  const getStringDate = (createDate) => {
    let year = createDate.getFullYear();
    let month = createDate.getMonth() + 1;
    let date = createDate.getDate();
    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
  };

  return (
    <>
      <div className="Editor">
        <section className="date_section">
          <h3>오늘의 날짜</h3>
          <input
            name="createDate"
            value={getStringDate(input.createDate)}
            type="date"
            onChange={onChangeInput}
          />
        </section>
        <section className="emotion_section">
          <h3>오늘의 감정</h3>
          <div className="emotion_list_wrapper">
            {emotionList.map((item) => {
              return (
                <EmotionItem
                  key={item.emotionId}
                  {...item}
                  onClick={() => {
                    onChangeInput({
                      target: {
                        name: "emotionId",
                        value: item.emotionId,
                      },
                    });
                  }}
                  isSelected={item.emotionId === input.emotionId}
                />
              );
            })}
          </div>
        </section>
        <section className="content_section">
          <h3>오늘의 일기</h3>
          <textarea
            name="content"
            value={input.content}
            placeholder="내용 입력"
            onChange={onChangeInput}
          ></textarea>
        </section>
        <hr />
        <section className="button_section">
          <Button
            text={"취소"}
            colorType={"NEGATIVE"}
            onClick={() => {
              nav(-1);
            }}
          />
          <Button
            text={"저장"}
            colorType={"POSITIVE"}
            onClick={() => onSubmit(input)}
          />
        </section>
      </div>
    </>
  );
};
export default Editor;
