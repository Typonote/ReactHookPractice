import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col text-center mt-10 items-center justify-center py-5 ">
      <p className="text-lg font-bold">
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>

      <div className="m-5">
        <button
          className="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg inline-block m-1"
          onClick={() => setValue(value + 1)}
        >
          +1
        </button>

        <button
          className="py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg inline-block m-1"
          onClick={() => setValue(value - 1)}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
