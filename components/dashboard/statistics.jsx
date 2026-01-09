"use client";
import { useState } from "react";
import Card from "@/components/ui/card";
import { PiCaretDown } from "react-icons/pi";
import Tabs from "@/components/ui/tabs";

export default function Statistics() {
  const [activeTab, setActiveTab] = useState("expense");
  const tabs = [
    {
      key: "income",
      label: "Income",
      value: "£4,800",
    },
    {
      key: "expense",
      label: "Expense",
      value: "£3,500",
    },
  ];

  return (
    <Card className="h-99.75 w-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[16px] leading-[120%] ">Statistic</h2>
        <div className="text-[12px] leading-[100%] font-semibold text-primary flex gap-1 items-center">
          <h2>This Month</h2>
          <PiCaretDown size={14} />
        </div>
      </div>
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
    </Card>
  );
}
