import FortuneTable from "@/app/_components/fortune-table/FortuneTable";
const Home = () => {
  return (
    <div className="relative w-[375px] min-h-[2081px] flex flex-col justify-end items-center bg-[url('/images/bg.webp')] bg-cover bg-no-repeat">
      <div className="absolute left-[17%] top-[31.5%]">
        <p className="font-bold">이제 본격적으로</p>
        <p className="font-bold">OO님의 사주팔자를</p>
        <p className="font-bold">분석해볼 차례네요.</p>
      </div>
      <div className="absolute left-[14%] top-[49.2%]">
        <p className="font-bold">제가 OO님의 사주를</p>
        <p className="font-bold">보기 쉽게 표로 정리했어요</p>
      </div>
      <div className="mb-20">
        <FortuneTable />
      </div>
    </div>
  );
};

export default Home;
