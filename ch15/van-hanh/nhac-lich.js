// Gui tin nhac lich hen: gia lap mot cuoc goi mang mat 20–80 ms (thoi gian THAT thay doi moi lan).
export function guiNhacLich(trangThai) {
  const cho = 20 + Math.floor(Math.random() * 60);
  return new Promise((xong) => setTimeout(() => { trangThai.daGui = true; xong(cho); }, cho));
}
