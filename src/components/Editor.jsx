import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionList = [
  { emotionId: 1, emotionName: "so good" },
  { emotionId: 2, emotionName: "good" },
  { emotionId: 3, emotionName: "soso" },
  { emotionId: 4, emotionName: "bad" },
  { emotionId: 5, emotionName: "so bad" },
];

const Editor = () => {
  const emotionId = 5;
  return (
    <div className="Editor">
      <section className="date">
        <h4>Today's Date</h4>
        <input type="date" name="" id="" />
      </section>
      <section className="emotion">
        <h4>Today's Feeling</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content">
        <h4>Today's diary</h4>
        <textarea placeholder="how about today?" />
      </section>
      <section className="button">
        <Button text={"cancel"} />
        <Button text={"save"} type={"GOOD"} />
      </section>
    </div>
  );
};

export default Editor;
