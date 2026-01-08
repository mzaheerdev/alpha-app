import Image from "next/image";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="flex font-urbanist min-h-screen w-full bg-primary ">
      <Sidebar /> 
      <Main />
    </div>
  );
}
