import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();

  return <div>{params.id} diary</div>;
};
export default Edit;
