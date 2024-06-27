import { getEmotionImage } from "../util/get-emotion-images";
import "./EmotionItem.css";
const EmotionItem = () => {
  return (
    <>
      <div className="EmotionItem">
        <img className="emotion_img" src={getEmotionImage(1)} />
        <div className="emotion_name">123</div>
      </div>
    </>
  );
};
export default EmotionItem;
