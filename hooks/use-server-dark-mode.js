import { cookies } from "next/headers";

const useServerDarkMode = async (defaultTheme = "dark") => {
  const cookieTheme = await cookies();
  console.log(
    "theme trong useServerDarkMode:",
    cookieTheme.get("theme")?.value ?? defaultTheme
  );
  return cookieTheme.get("theme")?.value ?? defaultTheme;
};

export default useServerDarkMode;
