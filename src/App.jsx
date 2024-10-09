import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useReducer, useRef, createContext } from "react";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-10-03").getTime(),
    emotionId: 1,
    content: "1 diary",
  },
  {
    id: 2,
    createdDate: new Date("2024-10-02").getTime(),
    emotionId: 2,
    content: "2 diary",
  },
  {
    id: 3,
    createdDate: new Date("2024-09-03").getTime(),
    emotionId: 3,
    content: "3 diary",
  },
  {
    id: 4,
    createdDate: new Date("2024-08-03").getTime(),
    emotionId: 4,
    content: "4 diary",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.data.id));
  }
  return state;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const idRef = useRef(3);
  const [data, dispatch] = useReducer(reducer, mockData);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
  };
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/add/diary" element={<New />} />
            <Route path="/edit/diary/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
