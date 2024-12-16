import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";

const New = () => {
  return (
    <div>
      <Header title={"Add diary"} leftChild={<Button text={"< Back"} />} />
      <Editor />
    </div>
  );
};
export default New;
