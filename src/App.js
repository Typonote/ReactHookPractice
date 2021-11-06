import { useState } from "react";
import "./App.css";
import Counter from "./HookPractice/Counter";
import Info from "./HookPractice/Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    // <div className="text-center p-5 ">
    //   <button
    //     className="p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300 mb-5"
    //     onClick={() => {
    //       setVisible(!visible);
    //     }}
    //   >
    //     {visible ? "숨기기" : "보이기"}
    //   </button>
    //   <hr />
    //   {visible && <Info />}
    // </div>
    <Counter />
  );
}

export default App;
