// app/layout.js

import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Chatbot from "@/components/chatbot";
import getServerDarkMode from "@/hooks/use-server-dark-mode";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Xitrumvndn",
    default: "Xitrumvndn",
  },
  description: "Xitrumvndn - Phan Minh Cuong",
};

// --- Nếu sử dụng cookies ----------------------------
// export default async function RootLayout({ children }) {
//   const theme = await getServerDarkMode();
// ----------------------------------------------------

export default function RootLayout({ children }) {
  const theme = getServerDarkMode();
  return (
    <html lang="en" className={theme}>
      <body className={roboto.className}>
        {/* <body className={inter.className}> */}
        <Header />
        <main className="mt-12">{children}</main>
        <Chatbot />
      </body>
    </html>
  );
}
