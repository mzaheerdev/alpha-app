import Card from "../ui/card"
import ProgressCard from "../ui/progress-card"
import { PiWarningLight, PiAirplaneTilt } from "react-icons/pi"
import { RxPlus } from "react-icons/rx"
import Button  from "../ui/button"

const emergencyFunds = [
  {
    id: 1,
    title: "Emergency Funds",
    spent: 2500,
    limit: 5000,
    currency: "£",
  },
]

const vacationFunds = [
  {
    id: 1,
    title: "Vacation Funds",
    spent: 1500,
    limit: 3000,
    currency: "£",
  },
]       
export default function SavingPlans() {
    return (
        <Card className="w-full h-auto flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold leading-[120%] text-[16px]">
              Saving Plans
            </h2>
            <div className="pt-0.5 pr-0.5 pb-0.75 gap-2.5 flex items-center">
              <RxPlus size={12} />
              <button className="font-medium text-[10px] leading-[100%] ">
                Add Plan
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="leading-[130%] text-[10px]">Total Savings</div>
            <h2 className="text-primary font-bold text-[24px] leading-[110%] ">
              £84,500
            </h2>
          </div>
          {emergencyFunds.map((item) => (
            <ProgressCard
              key={item.id}
              title={item.title}
              spent={item.spent}
              limit={item.limit}
              currency={item.currency}
              titleSize="sm"
              icon={
                <Button variant="icon" className="rounded-lg p-1.5 gap-2.5">
                  <PiWarningLight size={16} />
                </Button>
              }
            />
          ))}

          {vacationFunds.map((item) => (
            <ProgressCard
              key={item.id}
              title={item.title}
              spent={item.spent}
              limit={item.limit}
              currency={item.currency}
              titleSize="sm"
              icon={
                <Button variant="icon" className="rounded-lg p-1.5">
                  <PiAirplaneTilt size={16} />
                </Button>
              }
            />
          ))}
        </Card>
    )
    }