import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import getStringedDate from "../util/get-stringed-date";

const Editor = ({ onSubmit, currentData }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  useEffect(() => {
    if (currentData) {
      setInput({ ...currentData });
    }
  }, [currentData]);

  const nav = useNavigate();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") {
      value = new Date(e.target.value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitBtn = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date">
        <h4>Today&apos;s Date</h4>
        <input
          type="date"
          name="createdDate"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion">
        <h4>Today&apos;s Feeling</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content">
        <h4>Today&apos;s diary</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="how about today?"
        />
      </section>
      <section className="button">
        <Button
          text={"cancel"}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button text={"save"} type={"GOOD"} onClick={onSubmitBtn} />
      </section>
    </div>
  );
};

export default Editor;
