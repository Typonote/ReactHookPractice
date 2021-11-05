import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangeNicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div className="flex flex-col text-center mt-10 items-center justify-center py-5">
      <div>
        <input
          className="px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 m-3"
          placeholder="이름"
          name="name"
          value={name}
          onChange={onChangeNameHandler}
        />
        <input
          className="px-4 py-2 rounded-lg border border-blue-500 text-blue-600 placeholder-blue-600 m-3"
          placeholder="닉네임"
          name="nickname"
          value={nickname}
          onChange={onChangeNicknameHandler}
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
