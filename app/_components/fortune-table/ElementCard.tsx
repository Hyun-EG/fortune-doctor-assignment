import { ElementCardProps } from "@/app/_types/elementCardProps";

const ElementCard = ({ header, main, footer, bgColor }: ElementCardProps) => {
  return (
    <div
      className={`w-table-element-card-w h-table-element-card-h flex flex-col justify-center items-center rounded-xl ${bgColor}`}
    >
      <span className="text-card-xs text-white">{header}</span>
      <span className="text-card-xl font-bold text-white">{main}</span>
      <span className="text-card-sm text-white">{footer}</span>
    </div>
  );
};

export default ElementCard;
