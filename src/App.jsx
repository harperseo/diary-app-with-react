import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import getEmotionImg from "./util/get-emotion-img";

function App() {
  return (
    <>
      <div>
        <img src={getEmotionImg(1)} />
        <img src={getEmotionImg(2)} />
        <img src={getEmotionImg(3)} />
        <img src={getEmotionImg(4)} />
        <img src={getEmotionImg(5)} />
      </div>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/diary"}>Diary</NavLink>
        <NavLink to={"/add-diary"}>Add</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/add-diary" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
