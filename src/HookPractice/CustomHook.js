import React, { useReducer } from "react";

// 여허 컴포넌트에서 비슷한 기능을 공유하는 경우, customhook을 이용하여 로직을 재사용 할 수 있다.

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const CustomHook = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
};

export default CustomHook;
