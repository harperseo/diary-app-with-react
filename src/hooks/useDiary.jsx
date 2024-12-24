import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const [currentData, setCurrentData] = useState();
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();
  useEffect(() => {
    const targetData = data.find((item) => String(item.id) === String(id));
    if (!targetData) {
      window.alert("There's no diary");
      nav("/", { replace: true });
    }
    setCurrentData(targetData);
  }, [id, data]);

  return currentData;
};

export default useDiary;
