import ElementCard from "./ElementCard";
import Header from "./Header";
import { tableData } from "./tableData";

const FortuneTable = () => {
  return (
    <section className="relative w-table-w h-table-h flex flex-col justify-between items-center border-[3px] border-black bg-fortune-table-bg overflow-hidden">
      <div className="w-full h-2 border-b border-fortune-table-border" />
      <div className="flex-1" />
      <div className="w-full h-2 border-t border-fortune-table-border" />
      <div className="absolute top-0 w-table-inside-w h-table-h py-5 flex flex-col items-center border-x border-fortune-table-border">
        <Header />
        <main className="w-[310px] h-[473px] mt-7 flex flex-col bg-fortune-table-bg">
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black" />
            {tableData.header.map((item: string, index) => (
              <div
                key={index}
                className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4]"
              >
                <span className="text-xl font-bold">{item}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              <span className="text-xs font-bold">十星</span>
              <span className="text-card-xs">(십성)</span>
            </div>
            {tableData.row1.map((item, index) => (
              <div
                key={index}
                className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white"
              >
                <span className="text-xs font-bold">{item.label}</span>
                <span className="text-card-semi-sm">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-[27.27%] border-b border-black">
            <div className="w-full h-1/2 flex border-b border-black">
              <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
                <span className="text-xs font-bold">天干</span>
                <span className="text-card-xs">(천간)</span>
              </div>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white"
                  >
                    <ElementCard
                      header="사"
                      main="巳"
                      footer="陰火"
                      bgColor="bg-table-card-red"
                    />
                  </div>
                ))}
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
                <ElementCard
                  header="dls"
                  main="寅"
                  footer="陽木"
                  bgColor="bg-table-card-mint"
                />
              </div>
            </div>
            <div className="w-full h-1/2 flex">
              <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
                <span className="text-xs font-bold">地支</span>
                <span className="text-card-xs">(지지)</span>
              </div>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white"
                  >
                    <ElementCard
                      header="사"
                      main="巳"
                      footer="陰火"
                      bgColor="bg-table-card-red"
                    />
                  </div>
                ))}
              <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
                <ElementCard
                  header="해"
                  main="亥"
                  footer="陰水"
                  bgColor="bg-table-card-black"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              <span className="text-xs font-bold">十星</span>
              <span className="text-card-xs">(십성)</span>
            </div>
            {tableData.row4.map((item, index) => (
              <div
                key={index}
                className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white"
              >
                <span className="text-sm font-bold">{item.label}</span>
                <span className="text-card-semi-sm">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              <span className="text-xs font-bold">十二運星</span>
              <span className="text-card-xs">(십이운성)</span>
            </div>
            {tableData.row5.map((item, index) => (
              <div
                key={index}
                className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white"
              >
                <span className="text-sm font-bold">{item.label}</span>
                <span className="text-card-semi-sm">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-[9.09%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              <span className="text-xs font-bold">十二神殺</span>
              <span className="text-card-xs">(십이신살)</span>
            </div>
            {tableData.row6.map((item, index) => (
              <div
                key={index}
                className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white"
              >
                <span className="text-sm font-bold">{item.label}</span>
                <span className="text-card-semi-sm">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-[27.27%] flex border-b border-black">
            <div className="w-[16%] flex flex-col justify-center items-center border-r border-black">
              <span className="text-xs font-bold">貴人</span>
              <span className="text-card-xs">(귀인)</span>
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              <span className="text-card-semi-sm">{tableData.row7.none}</span>
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              <span className="text-card-semi-sm">{tableData.row7.none}</span>
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-[#d4d4d4] bg-white">
              <span className="text-sm font-bold">{tableData.row7.label}</span>
              <span className="text-card-semi-sm">{tableData.row7.value}</span>
            </div>
            <div className="w-[21%] flex flex-col justify-center items-center border-r border-black bg-white">
              <span className="text-sm font-bold">{tableData.row7.label}</span>
              <span className="text-card-semi-sm">{tableData.row7.value}</span>
              <span className="text-sm font-bold">{tableData.row7.label}</span>
              <span className="text-card-semi-sm">{tableData.row7.value}</span>
              <span className="text-sm font-bold">{tableData.row7.label}</span>
              <span className="text-card-semi-sm">{tableData.row7.value}</span>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default FortuneTable;
