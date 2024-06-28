import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-images";

//감정데이터를 입력
const emotionList = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "매우나쁨" },
];
const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <>
      <div className="Viewer">
        <section className="img_section">
          <h3>감정내용</h3>
          <div className="emotion_img_wrapper">
            <img src={getEmotionImage(emotionId)} />
            <div>{emotionItem.emotionName}</div>
          </div>
        </section>
        <section className="content_section">
          <h3>일기 내용</h3>
          <p>{content}</p>
        </section>
      </div>
    </>
  );
};

export default Viewer;
