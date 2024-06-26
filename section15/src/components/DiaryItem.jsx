import "./DiaryItem.css";
import { getEmotionImage } from "../util/get-emotion-images";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createDate, content }) => {
  const nav = useNavigate();

  return (
    <>
      <div className="DiaryItem">
        <div
          className="img_section"
          onClick={() => {
            nav(`/diary/${id}`);
          }}
        >
          <img src={getEmotionImage(emotionId)} />
        </div>
        <div className="info_section">
          <div className="create_date">
            {new Date(createDate).toLocaleDateString()}
          </div>
          <div className="content">{content}</div>
        </div>
        <div className="button_section">
          <Button
            text={"수정하기"}
            onClick={() => {
              nav(`/edit/${id}`);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default DiaryItem;
