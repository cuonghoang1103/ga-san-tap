// @ts-check
/**
 * Luat dat lich — ham THUAN, khong dung toi DB, de test tren may trong vai mili giay.
 * Phong kham mo 08:00–17:00, moi lich 30 phut, bat dau o phut 00 hoac 30.
 */

/** @typedef {{ bacSi: string, benhNhan: string, batDau: string }} YeuCauLich */

export const GIO_MO = 8;
export const GIO_DONG = 17;

/**
 * Kiem mot yeu cau dat lich. Tra ve danh sach loi (rong = hop le).
 * @param {Partial<YeuCauLich>} yc
 * @returns {string[]}
 */
export function kiemLich(yc) {
  const loi = [];
  if (!yc.bacSi || typeof yc.bacSi !== 'string') loi.push('thieu bacSi');
  if (!yc.benhNhan || typeof yc.benhNhan !== 'string') loi.push('thieu benhNhan');
  if (!yc.batDau) {
    loi.push('thieu batDau');
    return loi;
  }
  const t = new Date(yc.batDau);
  if (Number.isNaN(t.getTime())) {
    loi.push('batDau khong phai thoi diem hop le');
    return loi;
  }
  const gio = t.getUTCHours();
  const phut = t.getUTCMinutes();
  if (phut !== 0 && phut !== 30) loi.push('lich phai bat dau o phut 00 hoac 30');
  if (gio < GIO_MO || gio >= GIO_DONG) loi.push(`ngoai gio lam viec ${GIO_MO}:00-${GIO_DONG}:00`);
  return loi;
}
