import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const [currentData, setCurrentData] = useState();
  const data = useContext(DiaryStateContext);
  useEffect(() => {
    const targetData = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!targetData) {
      window.alert("There's no diary");
      nav("/", { replace: true });
    }
    setCurrentData(targetData);
  }, [params.id]);

  const onClickDelete = () => {
    if (window.confirm("Do you want to delete it?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("Are you sure?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"edit diary"}
        leftChild={<Button text={"< Back"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"delete"} type={"SOSO"} onClick={onClickDelete} />
        }
      />
      <Editor onSubmit={onSubmit} currentData={currentData} />
    </div>
  );
};
export default Edit;
