import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("");

  // to display a div bottom or top give fixed and bottom or top like "fixed bottom-16"

  return (
    <>
      <div className={`${color} h-screen w-screen p-20  `}>
        <div>
          <div className="flex flex-col gap-2  bg-slate-100  p-4 rounded-xl w-fit items-center ">
            <button
              onClick={() => {
                setColor("bg-green-500");
              }}
              className="btn h-12 w-24 font-bold rounded-xl  border-2 border-gray-800 bg-green-500"
            >
              green
            </button>
            <button
              onClick={() => {
                setColor("bg-red-500");
              }}
              className="btn h-12 w-24 font-bold rounded-xl  border-2 border-gray-800 bg-red-500"
            >
              red
            </button>
            <button
              onClick={() => {
                setColor("bg-blue-500");
              }}
              className="btn h-12 w-24 font-bold rounded-xl  border-2 border-gray-800 bg-blue-500"
            >
              blue
            </button>
            <button
              onClick={() => {
                setColor("bg-yellow-500");
              }}
              className="btn h-12 w-24 font-bold rounded-xl  border-2 border-gray-800 bg-yellow-500"
            >
              yellow
            </button>
            <button
              onClick={() => {
                setColor("bg-white");
              }}
              className="btn h-12 w-24 font-bold rounded-xl  border-2 border-gray-800 bg-white text-black"
            >
              white
            </button>
            <button
              onClick={() => {
                setColor("bg-purple-500");
              }}
              className="btn h-12 w-24 font-bold rounded-xl  border-2 border-gray-800 bg-purple-500"
            >
              purple
            </button>
            <button
              onClick={() => {
                setColor("bg-orange-500");
              }}
              className="btn h-12 w-24 font-bold rounded-xl  border-2 border-gray-800 bg-orange-500"
            >
              orange
            </button>
            <button
              onClick={() => {
                setColor("bg-black");
              }}
              className="btn h-12 w-24 font-bold rounded-xl  border-2 border-gray-800 text-white bg-black"
            >
              black
            </button>
            <button
              onClick={() => {
                setColor("bg-indigo-500");
              }}
              className="btn h-12 w-24 font-bold rounded-xl border-2 border-gray-800  bg-indigo-500"
            >
              lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
