import React, { useReducer, useState } from "react";

// useReducer는 더 다양한 컴포넌트 상황에서 다양한 상태를 다름 값을 업데이트 할때 사용하는 hook
// 현재 상태와 필요한 정보를 담은 액션값을 전달 받아, 새로운 상태를 반환한다.
function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  // useReducer(리듀서 함수,{기본값}) => state(현재 상태)값과 dispatch(액션 발생 함수)을 받음.

  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div className="flex flex-col text-center mt-10 items-center justify-center py-5 ">
      <p className="text-lg font-bold">
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>

      <div className="m-5">
        <button
          className="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg inline-block m-1"
          // 함수 안에 액션 값을 넣으면 리듀서 함수가 호출 됨.
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +1
        </button>

        <button
          className="py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg inline-block m-1"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
