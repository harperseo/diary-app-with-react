import { Route, Routes } from "react-router-dom";
import "./App.css";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        title={"My Diary"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />
      <Button
        text={"1234"}
        type={"GOOD"}
        onClick={() => {
          console.log("click");
        }}
      />
      <Button
        text={"1234"}
        type={"SOSO"}
        onClick={() => {
          console.log("click");
        }}
      />
      <Button
        text={"1234"}
        type={"BAD"}
        onClick={() => {
          console.log("click");
        }}
      />
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
