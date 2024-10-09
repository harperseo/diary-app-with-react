import getImotionImg from "../util/get-emotion-img";
import Button from "./Button";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        className={`img img_${emotionId}`}
        onClick={() => nav(`/diary/${id}`)}
      >
        <img src={getImotionImg(emotionId)} />
      </div>
      <div className="info">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button">
        <Button text={"edit"} onClick={() => nav(`/edit/diary/${id}`)} />
      </div>
    </div>
  );
};

export default DiaryItem;
