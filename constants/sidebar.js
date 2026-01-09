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
    route: "/dashboard",
  },
  {
    id: "transfers",
    label: "Transfers",
    icon: HiMiniArrowsRightLeft,
    route: "/transfers",
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
    route: "/cards",
  },
  {
    id: "invoices",
    label: "Invoices",
    icon: PiReceiptFill,
    route: "/invoices",
  },
  {
    id: "savingPlans",
    label: "Saving Plans",
    icon: PiCoins,
    route: "/saving-plans",
  },
  {
    id: "schedules",
    label: "Schedules",
    icon: PiCurrencyEth,
    route: "/schedules",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: PiEnvelope,
    route: "/calendar",
  },
  {
    id: "withdrawals",
    label: "Withdrawals",
    icon: PiNewspaper,
    route: "/withdrawals",
  },
  {
    id: "helpSupport",
    label: "Help & Support",
    icon: PiSealPercent,
    route: "/help",
  },
  {
    id: "deposits",
    label: "Deposits",
    icon: PiSealPercent,
    route: "/deposits",
  },
];

