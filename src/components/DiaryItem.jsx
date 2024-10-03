import getImotionImg from "../util/get-emotion-img";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = () => {
  const emotionId = 4;
  return (
    <div className="DiaryItem">
      <div className={`img img_${emotionId}`}>
        <img src={getImotionImg(emotionId)} />
      </div>
      <div className="info">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">diary content</div>
      </div>
      <div className="button">
        <Button text={"edit"} />
      </div>
    </div>
  );
};

export default DiaryItem;
