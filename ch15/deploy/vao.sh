#!/bin/sh
# Khoi dong "VPS": nap khoa cong khai duoc phep vao, cho deployer vao nhom so huu docker.sock, roi chay sshd.
set -e
[ -n "$AUTHORIZED_KEY" ] || { echo "thieu AUTHORIZED_KEY" >&2; exit 1; }
echo "$AUTHORIZED_KEY" > /home/deployer/.ssh/authorized_keys
chown deployer:deployer /home/deployer/.ssh/authorized_keys
chmod 600 /home/deployer/.ssh/authorized_keys
GID=$(stat -c %g /var/run/docker.sock)
getent group "$GID" >/dev/null || addgroup -g "$GID" dockerhost
addgroup deployer "$(getent group "$GID" | cut -d: -f1)"
exec /usr/sbin/sshd -D -e
