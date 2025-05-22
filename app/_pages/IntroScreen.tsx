"use client";

import Image from "next/image";
import logo from "@/public/icons/logo-512x512.png";

import { useRouter } from "next/navigation";

const IntroScreen = () => {
  const router = useRouter();
  return (
    <div className="relative min-w-[448px] min-h-[667px] flex justify-center items-end bg-[url('/images/intro-screen.webp')] bg-cover bg-center">
      <div className="absolute left-8 top-8">
        <div
          className="flex flex-col gap-2"
          style={{ textShadow: "0 0 10px white" }}
        >
          <span className="text-6xl font-bold ">청</span>
          <span className="text-6xl font-bold">월</span>
          <span className="text-6xl font-bold">아</span>
          <span className="text-6xl font-bold">씨</span>
          <Image width={55} src={logo} alt="로고 사진" />
        </div>
      </div>
      <div className="absolute left-24 top-24">
        <div
          className="flex flex-col gap-2"
          style={{ textShadow: "0 0 10px white" }}
        >
          <span className="text-6xl font-bold ">정</span>
          <span className="text-6xl font-bold">통</span>
          <span className="text-6xl font-bold">사</span>
          <span className="text-6xl font-bold">주</span>
        </div>
      </div>
      <div className="mb-10 flex flex-col justify-center items-center">
        <div className="pb-20">
          <p className="animate-fadeIn text-2xl text-white font-bold">
            &quot;인생의 중요한 순간.
          </p>
          <p className="animate-fadeIn text-2xl text-white font-bold">
            곧 찾아올지도 몰라요&quot;
          </p>
        </div>
        <button
          onClick={() => {
            router.push("/username");
          }}
          className="w-32 h-10 flex justify-center items-center bg-white rounded-3xl"
        >
          <span className="inline-block text-xl font-bold animate-bounce [animation-duration:1.5s]">
            Touch!
          </span>
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
