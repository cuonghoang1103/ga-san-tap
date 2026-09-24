// Backend: tinh so cho trong cua mot ca kham.
export const choTrong = (tong, daDat) => Math.max(0, tong - daDat);
export const hetCho = (tong, daDat) => choTrong(tong, daDat) === 0;
export const tiLeDay = (tong, daDat) => (tong === 0 ? 0 : Math.min(1, daDat / tong));
