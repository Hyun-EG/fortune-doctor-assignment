const FortuneTable = () => {
  return (
    <section className="relative w-table-w h-table-h flex flex-col justify-between items-center border-[3px] border-black bg-fortune-table-bg overflow-hidden">
      <div className="w-full h-2 border-b border-fortune-table-border" />
      <div className="flex-1" />
      <div className="w-full h-2 border-t border-fortune-table-border" />
      <div className="absolute top-0 w-table-inside-w h-table-h py-5 flex flex-col items-center border-x border-fortune-table-border">
        <header className="w-full h-14 pt-3 flex flex-col gap-1 bg-[url('/images/img-layer.png')] bg-no-repeat bg-cover">
          <p className="text-center text-[16px] font-bold text-fortune-table-title-text-color">
            김로켓님의 사주
          </p>
          <p className="text-center text-[20px] font-extrabold text-fortune-table-title-text-color">
            1980년 8월27일 08:10
          </p>
        </header>
        <main className="w-[310px] h-[473px] mt-7 flex flex-col bg-fortune-table-bg">
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              가
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4]">
              니
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4]">
              디
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4]">
              리
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-black">
              미
            </div>
          </div>
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              시
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              자
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              차
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              카
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
              타
            </div>
          </div>
          <div className="w-full h-[27.27%] border-b border-black">
            <div className="w-full h-1/2 flex border-b border-black">
              <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
                파
              </div>
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
                하
              </div>
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
                하
              </div>
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
                하
              </div>
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
                하
              </div>
            </div>
            <div className="w-full h-1/2 flex h-1/2">
              <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
                가
              </div>
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
                나
              </div>
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
                다
              </div>
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
                라
              </div>
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
                마
              </div>
            </div>
          </div>
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              바
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              사
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              아
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              자
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
              차
            </div>
          </div>
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              카
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              타
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              파
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              하
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
              가
            </div>
          </div>
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              나
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              다
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              라
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              마
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
              바
            </div>
          </div>
          <div className="w-full h-[27.27%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              사
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              아
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              자
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              차
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
              카
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default FortuneTable;
