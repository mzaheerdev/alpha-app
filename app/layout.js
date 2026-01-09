import { Urbanist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/sidebar";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});



export const metadata = {
  title: "Alpha App",
  description: "Assessment Project for Alpha Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${urbanist.variable}  antialiased`}
      >
        <div className="flex font-urbanist min-h-screen w-full bg-primary">

          <Sidebar />
          
          <div className="bg-white text-black w-full rounded-tl-3xl rounded-bl-3xl flex-1 py-5.5 px-7 gap-4 flex flex-col ml-48 ">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
