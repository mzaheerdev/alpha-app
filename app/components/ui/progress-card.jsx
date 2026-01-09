import { PiDotsThreeVerticalLight } from "react-icons/pi";
import Card from "./card";

const ProgressCard = ({
  title,
  spent,
  limit,
  currency,
  icon,
  titleSize = "md",
}) => {
  const percentage = Math.min((spent / limit) * 100, 100);

  return (
    <Card className="w-full h-auto flex flex-col gap-5">
      {/* Header */}
      <div className="flex  justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h2
            className={
              titleSize === "sm"
                ? "text-[12px] font-medium leading-[130%]"
                : "text-[16px] font-bold leading-[100%]"
            }
          >
            {title}
          </h2>
        </div>
        <PiDotsThreeVerticalLight size={18} className="font-bold" />
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-3">
        <div className="h-2 w-full rounded-lg bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="leading-[130%] text-[10px]">
            <span className="font-semibold text-[12px]">
              {currency}
              {spent.toLocaleString()}
            </span>{" "}
            spent of {currency}
            {limit.toLocaleString()}
          </div>
          <h4 className="text-[12px] leading-[130%] font-semibold">
            {percentage.toFixed(1)}%
          </h4>
        </div>
      </div>
    </Card>
  );
};

export default ProgressCard;
