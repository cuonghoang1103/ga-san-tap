# "VPS" GIA LAP cho bai 15.3 — chay NGAY TRONG job, khong phai may that nao.
# Mot may Alpine co sshd + docker CLI; docker CLI noi vao Docker daemon cua runner qua socket,
# nen container ma "VPS" chay ra thuc chat chay tren runner — dung de minh hoa, KHONG dung cho production.
FROM alpine:3.22
RUN apk add --no-cache openssh-server docker-cli bash curl \
 && ssh-keygen -A \
 && adduser -D -s /bin/bash deployer \
 && sed -i 's/^deployer:!/deployer:*/' /etc/shadow \
 && mkdir -p /home/deployer/.ssh /srv/phong-kham \
 && chown -R deployer:deployer /home/deployer /srv/phong-kham \
 && printf 'PasswordAuthentication no\nKbdInteractiveAuthentication no\nPermitRootLogin no\n' > /etc/ssh/sshd_config.d/01-chi-khoa.conf
COPY vao.sh /vao.sh
COPY trien-khai.sh /srv/phong-kham/trien-khai.sh
RUN chmod +x /vao.sh /srv/phong-kham/trien-khai.sh
EXPOSE 22
ENTRYPOINT ["/vao.sh"]
