"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const UserName = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const postName = () => {
    if (inputValue.trim() === "") {
      alert("이름을 입력해주세요.");
    } else {
      sessionStorage.setItem("name", inputValue);
      router.push("/home");
    }
  };
  return (
    <div className="min-w-[448px] min-h-screen flex flex-col items-center">
      <div className="mb-4 text-center font-bold">성함을 입력해주세요.</div>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="성함을 입력해주세요."
        className="w-80 h-10 px-4 border border-[#bebebe] rounded-xl outline-blue-500"
        type="text"
      />
      <button
        onClick={() => postName()}
        className="w-80 h-10 mt-4 rounded-xl text-white font-bold bg-blue-500 "
      >
        운세 보기
      </button>
    </div>
  );
};

export default UserName;
