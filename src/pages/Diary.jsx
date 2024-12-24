import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import getStringedDate from "../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const currentData = useDiary(params.id);
  if (!currentData) {
    return <>loading...</>;
  }
  const title = getStringedDate(currentData.createdDate);

  return (
    <div>
      <Header
        title={title}
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
      <Viewer diary={currentData} />
    </div>
  );
};
export default Diary;
