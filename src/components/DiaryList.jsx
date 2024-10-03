import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>Newest</option>
          <option value={"oldest"}>Oldest</option>
        </select>
        <Button text={"Add new diary"} type={"GOOD"} />
      </div>
      <div className="list_wrapper">
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
