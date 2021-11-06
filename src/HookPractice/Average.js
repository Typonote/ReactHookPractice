import React, { useCallback, useMemo, useState, useRef } from "react";

// useMemo를 사용하면 컴포넌트 내의 연산을 최적화할 수 있다.
// 렌더링 과정에서 특정 값이 바뀌었을때만 연산을 실행하고, 원하는 값이 바뀌지 않으면 이전 연산의 결과를 출력
// useState 사용시에는 input 내용을 수정할 때도, 호출됨. => useMemo사용 시 list 배열의 내용이 바뀔때만 호출

// useCallback은 렌더링을 최적화할때 사용 => useCallback(생성하고 싶은 함수, 배열)
// useCallback은 useMemo를 함수로 반환하는 상황에서 더 편하게 사용할 수 있는 Hook.

// useRef는 함수형 컴포넌트에서 ref를 사용할 수 있게 해주는 hook이다.
// ref는 'DOM'을 직접 건드려야 할 때 사용한다. => input에 포커스 주기, 스크롤 박스 조작 등

const getAverage = (numbers) => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div className="flex flex-col text-center mt-10 items-center justify-center py-5 ">
      <input
        className="px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 m-3"
        placeholder="숫자"
        name="number"
        value={number}
        onChange={onChange}
        ref={inputEl}
      />
      <button
        className="py-2 px-6 text-white rounded-lg bg-green-400 shadow-lg inline-block"
        onClick={onInsert}
      >
        등록
      </button>
      <ul className="mt-5">
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
