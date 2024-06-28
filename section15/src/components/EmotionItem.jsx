import { getEmotionImage } from "../util/get-emotion-images";
import "./EmotionItem.css";

const EmotionItem = ({ emotionId, emotionName, onClick, isSelected }) => {
  return (
    <>
      <div
        className={`EmotionItem ${isSelected ? "Emotion_select" : ""}`}
        onClick={onClick}
      >
        <img className="emotion_img" src={getEmotionImage(emotionId)} />
        <div className="emotion_name">{emotionName}</div>
      </div>
    </>
  );
};
export default EmotionItem;
