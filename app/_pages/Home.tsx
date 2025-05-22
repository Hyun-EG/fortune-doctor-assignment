"use client";

import FortuneTable from "@/app/_components/fortune-table/FortuneTable";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Home = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const sessionName = sessionStorage.getItem("name");
    if (!sessionName) {
      alert("이름을 기입하고 이동해주세요.");
      router.replace("/username");
    } else {
      setName(sessionName);
    }
  }, [router]);
  return (
    <div className="relative min-w-[448px] min-h-[2340px] flex flex-col justify-end items-center bg-[url('/images/bg.webp')] bg-cover bg-no-repeat">
      <div className="absolute left-[18.5%] top-[33.9%]">
        <p className="font-bold">이제 본격적으로</p>
        <p className="font-bold">{name}님의 사주팔자를</p>
        <p className="font-bold">분석해볼 차례네요.</p>
      </div>
      <div className="absolute left-[17%] top-[52.5%]">
        <p className="font-bold">제가 {name}님의 사주를</p>
        <p className="font-bold">보기 쉽게 표로 정리했어요</p>
      </div>
      <div className="mb-20">
        <FortuneTable />
      </div>
    </div>
  );
};

export default Home;
