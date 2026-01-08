'use client';
import React from "react";
import SearchInput from "../ui/search-input";
import { usePathname } from "next/navigation";
import { PiChatTeardropDots ,PiBellLight} from "react-icons/pi";

import Button from "../ui/button";
import Avatar from "../ui/avatar";


const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/transfers": "Transfers",
  "/transfers/add-money": "Add Money",
  "/transfers/send": "Transfer",
  "/transfers/request": "Request Money",
  "/transfers/history": "Transfer History",
  "/cards": "Cards",
  "/invoices": "Invoices",
  "/saving-plans": "Saving Plans",
  "/schedules": "Schedules",
  "/calendar": "Calendar",
  "/withdrawals": "Withdrawals",
  "/help": "Help & Support",
  "/deposits": "Deposits",
};

const Header = () => {
    
  const pathname = usePathname();
    const [query, setQuery] = React.useState("");


  const title = PAGE_TITLES[pathname] ?? "Dashboard";

  return (
    <header className="h-9.5 flex items-center justify-between ">
      {/* Left: Dynamic Page Title */}
      <h1 className="text-[22px] text-primary font-bold leading-[120%] ">
        {title}
      </h1>

      {/* Right: static content */}
      <div className="flex flex-row items-center gap-5">
        <SearchInput
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search placeholder"
    />
       <div className="flex gap-2.5">
        <Button variant="icon">
  <PiChatTeardropDots size={20} className="text-primary" />
</Button>
        <Button variant="icon">
 <span className="relative inline-flex">
    <PiBellLight size={18} className="text-primary" />

    {/* Notification dot */}
    <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
  </span>
</Button>
       </div>
       <div className="flex gap-3.5 items-center">
        <h2 className="text-primary font-bold text-[16px] leading-[120%]">Andrew Forbist</h2>
        <Avatar src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740&q=80" alt="profile_img" size="md" />
       </div>
      </div>
    </header>
  );
};

export default Header;
