#!/usr/bin/env bash
# "Kiem bo kiem TRUOC khi tin no": chay moi bo kiem qua ca duong DUNG lan duong SAI.
# Mot bo kiem dat yeu cau khi: xanh o 'song', DO o moi kich ban hong.
set -u
export NGHI=1
loi=0
printf '%-26s %-10s %-8s %-8s %s\n' "bo kiem" "kich ban" "mong" "that" "ket luan"
for bk in kiem-cu kiem-moi smoke-404 smoke-danh-sach-trang; do
  for kb in song loi500 chet; do
    mong=do; [ "$kb" = song ] && mong=xanh
    t0=$SECONDS
    if ./$bk.sh "ch10-web-$kb" >/dev/null 2>&1; then that=xanh; else that=do; fi
    dt=$((SECONDS - t0))
    if [ "$that" = "$mong" ]; then kl="ok"; else kl="SAI — bo kiem khong tin duoc"; loi=1; fi
    printf '%-26s %-10s %-8s %-8s %s (%ss)\n' "$bk" "$kb" "$mong" "$that" "$kl" "$dt"
  done
done
exit $loi
