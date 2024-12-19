// app/layout.js

import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Chatbot from "@/components/chatbot";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Piotr Jura",
    default: "Piotr Jura",
  },
  description: "Piotr Jura Portfolio",
};

export default async function RootLayout({ children }) {
  const theme = await useServerDarkMode();
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
