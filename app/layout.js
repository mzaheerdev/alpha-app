import { Urbanist } from "next/font/google";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
