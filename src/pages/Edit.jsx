import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  usePageTitle(`Edit no.${params.id}`);
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const currentData = useDiary(params.id);

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
