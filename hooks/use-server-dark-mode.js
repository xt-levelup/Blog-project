// Sử dụng cookies trong trường hợp này sẽ hoàn toàn
// rơi vào trạng thái Dynamic Server-render (khi chạy
// npm run build sẽ thấy), điều này
// không phải không tốt mà là sẽ tốn thêm dữ liệu ở server.

// import { cookies } from "next/headers";

const getServerDarkMode = (defaultTheme = "dark") => {
  return defaultTheme;
};
// const getServerDarkMode = async (defaultTheme = "dark") => {
//   const cookieTheme = await cookies();
//   return cookieTheme.get("theme")?.value ?? defaultTheme;
// };

export default getServerDarkMode;
