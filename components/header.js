import Link from "next/link";
import Navigation from "./navigation";
import DarkMode from "./dark-mode";
import getServerDarkMode from "@/hooks/use-server-dark-mode";

// --- Nếu sử dụng cookies ----------------
// export default async function Header() {
//   const theme = await getServerDarkMode();
// ------------------------------------------

export default function Header() {
  const theme = getServerDarkMode();
  return (
    <header className="flex justify-between md:items-center mt-4">
      <div className="flex items-center md:space-x-12">
        <div className="hidden md:block">
          <Link href="/" className="text-xl font-mono">
            Phan Minh Cuong
          </Link>
        </div>
        <Navigation />
      </div>
      <div>
        <DarkMode defaultTheme={theme} />
      </div>
    </header>
  );
}
