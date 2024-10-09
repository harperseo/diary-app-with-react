import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = ({ data }) => {
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
        {data.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
