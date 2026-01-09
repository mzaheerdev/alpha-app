import ProgressCard from "@/components/ui/progress-card";
import SavingPlans from "@/components/dashboard/saving-plans";
import Actions from "@/components/dashboard/actions";
import AtmCard from '@/components/dashboard/atm-card';
import ExpenseCards from "@/components/dashboard/expense-cards";
import Statistics from "@/components/dashboard/statistics";
import Card from "@/components/ui/card";

export default function Dashboard() {
 
  const dailyLimits = [
    {
      id: "daily-limit",
      title: "Daily Limit",
      spent: 2500,
      limit: 20000,
      currency: "£",
    },
  ];

  return (
    <div className="flex gap-4 h-full">
      <div className="w-[25%] h-full flex flex-col gap-4 ">
        {/* //! Card design */}
       <AtmCard />
        {/* //! action buttons design */}
        <Actions />
        {/* //! daily limit design */}
        {dailyLimits.map((item) => (
          <ProgressCard
            key={item.id}
            title={item.title}
            spent={item.spent}
            limit={item.limit}
            currency={item.currency}
          />
        ))}
        {/* //! saving plans design */}
       <SavingPlans />
      </div>

      <div className="w-[50%] flex flex-col gap-4">
       <ExpenseCards />
       <Card className="h-86.75 w-full">
   <h2 className="font-bold text-[16px] leading-[120%] ">Cashflow</h2>
       </Card>
       <Card className="flex-1 w-full">
   <h2 className="font-bold text-[16px] leading-[120%] ">Recent Transactions</h2>
       </Card>
      </div>
      <div className="w-[25%]  h-full flex flex-col gap-4">
        <Statistics />
        <Card className="w-full flex-1">
          <h2 className="font-bold text-[16px] leading-[120%]">Recent Activity</h2>
        </Card>
      </div>
    </div>
  );
}
