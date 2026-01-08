import {
  PiSquaresFour,
  PiCreditCard,
  PiReceiptFill,
  PiCoins,
  PiCurrencyEth,
  PiEnvelope,
  PiNewspaper,
  PiSealPercent,
  PiPlusCircle,
  PiArrowsLeftRight,
  PiClockCounterClockwise,
  PiHandCoins,
} from "react-icons/pi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";


export const SIDEBAR_TABS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: PiSquaresFour,
  },
  {
    id: "transfers",
    label: "Transfers",
    icon: HiMiniArrowsRightLeft,
    children: [
      {
        id: "addMoney",
        label: "Add Money",
        icon: PiPlusCircle,
        route: "/transfers/add-money",
      },
      {
        id: "transfer",
        label: "Transfer",
        icon: PiArrowsLeftRight,
        route: "/transfers/send",
      },
      {
        id: "request",
        label: "Request",
        icon: PiHandCoins,
        route: "/transfers/request",
      },
      {
        id: "history",
        label: "History",
        icon: PiClockCounterClockwise,
        route: "/transfers/history",
      },
    ],
  },
  {
    id: "cards",
    label: "Cards",
    icon: PiCreditCard,
  },
  {
    id: "invoices",
    label: "Invoices",
    icon: PiReceiptFill,
  },
  {
    id: "savingPlans",
    label: "Saving Plans",
    icon: PiCoins,
  },
  {
    id: "schedules",
    label: "Schedules",
    icon: PiCurrencyEth,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: PiEnvelope,
  },
  {
    id: "widthdrawals",
    label: "Widthdrawals",
    icon: PiNewspaper,
  },
  
  {
    id: "helpSupport",
    label: "Help & Support",
    icon: PiSealPercent,
  },
  { id: "deposits", label: "Deposits", icon: PiSealPercent}
] 
