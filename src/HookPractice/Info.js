import React, { useEffect, useReducer, useState } from "react";

// useReducer에서 액션은 그 어떤 값도 사용 가능 => 이벤트 객체가 가지고 있는 e.target 값 자체를 액션 값으로 사용가능하다.
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state; // {} 주의!

  const onChangeHandler = (e) => {
    dispatch(e.target);
  };

  return (
    <div className="flex flex-col text-center mt-10 items-center justify-center py-5">
      <div>
        <input
          className="px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 m-3"
          placeholder="이름"
          name="name"
          value={name}
          onChange={onChangeHandler}
        />
        <input
          className="px-4 py-2 rounded-lg border border-blue-500 text-blue-600 placeholder-blue-600 m-3"
          placeholder="닉네임"
          name="nickname"
          value={nickname}
          onChange={onChangeHandler}
        />
      </div>
      <div className="mt-10">
        <div className="m-3 text-lg font-bold">
          <b>이름:</b> {name}
        </div>
        <div className="m-3 ext-lg font-bold">
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
