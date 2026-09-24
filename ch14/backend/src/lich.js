// Backend: tinh so cho trong cua mot ca kham.
export const choTrong = (tong, daDat) => Math.max(0, tong - daDat);
export const hetCho = (tong, daDat) => choTrong(tong, daDat) === 0;
