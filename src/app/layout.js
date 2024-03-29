import { Inter } from "next/font/google";
import ContextApi from "./contextApi";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FakeBook | Clone of Facebook",
  description: "FakeBook app created with inspiration of facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextApi>
        {children}
        </ContextApi>
        </body>
    </html>
  );
}
