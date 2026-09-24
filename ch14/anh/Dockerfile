# Anh nho nhat co the: busybox + mot tep. Dung cho bai 14.3 (GHCR + attestation).
FROM busybox:1.37
ARG PHIEN_BAN=dev
COPY chao.txt /chao.txt
RUN echo "phien ban: ${PHIEN_BAN}" >> /chao.txt
CMD ["cat", "/chao.txt"]
