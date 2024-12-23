import { emotionList } from "../util/constants";
import getEmotionImg from "../util/get-emotion-img";
import "./Viewer.css";

function Viewer({ diary }) {
  const emotionId = diary.emotionId;
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );
  return (
    <div className="Viewer">
      <section className="img">
        <h4>Today's feeling</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImg(diary.emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content">
        <h4>Today's diary</h4>
        <div className="content_wrapper">
          <p>{diary.content}</p>
        </div>
      </section>
    </div>
  );
}

export default Viewer;
