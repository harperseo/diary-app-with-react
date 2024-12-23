import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { DiaryStateContext } from "../App";
import { useContext } from "react";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const result = data.find((target) => String(target.id) === String(params.id));
  const getStringedDate = (param) => {
    const targetDate = typeof param === "number" ? new Date(param) : param;

    //YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
  };

  return (
    <div>
      <Header
        title={getStringedDate(result.createdDate)}
        leftChild={
          <Button
            text={"Back"}
            onClick={() => {
              nav(-1, "replace:true");
            }}
          />
        }
        rightChild={
          <Button
            text={"Edit"}
            onClick={() => {
              nav(`/edit/diary/${params.id}`);
            }}
          />
        }
      />
      <Viewer diary={result} />
    </div>
  );
};
export default Diary;
