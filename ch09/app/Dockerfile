# Chương 9 — "ứng dụng" giả để deploy thật trong job: busybox httpd phục vụ một trang có số phiên bản.
# HONG=1 mô phỏng một ảnh "build xanh mà không chạy nổi" (như 18/08/2026: thiếu engine đúng libc) — tiến trình thoát ngay.
FROM busybox:1.36
ARG PHIEN_BAN=chua-dat
ARG HONG=0
RUN mkdir -p /www && echo "phien-ban=${PHIEN_BAN}" > /www/index.html && echo "${HONG}" > /hong
EXPOSE 8080
CMD ["sh", "-c", "if [ \"$(cat /hong)\" = 1 ]; then echo 'LOI: khong nap duoc engine (gia lap anh hong)' >&2; exit 1; fi; exec httpd -f -p 8080 -h /www"]
