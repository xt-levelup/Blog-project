"use client";

import useDarkMode from "@/hooks/use-dark-mode";

const nextModeIcons = {
  light: "🌚",
  dark: "🌝",
};

export default function DarkMode({ defaultTheme }) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);
  console.log("theme in DarkMode:", theme);
  //   Có lẽ nên sử dụng ReduxJs để đọc và lưu chứ có lỗi refresh rồi!
  return (
    <>
      {/* <button onClick={toggleTheme}>{nextModeIcons[resolvedTheme]}</button> */}
      <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>
    </>
  );
}
