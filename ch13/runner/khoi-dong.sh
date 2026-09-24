#!/usr/bin/env bash
# Chay BEN TRONG container: dang ky runner ephemeral, nhan DUNG MOT job, roi thoat.
# Can: REPO_URL, RUNNER_TOKEN (registration token, song 1 gio). Tuy chon: RUNNER_NAME, RUNNER_LABELS.
set -euo pipefail
: "${REPO_URL:?thieu REPO_URL}" "${RUNNER_TOKEN:?thieu RUNNER_TOKEN}"
TEN="${RUNNER_NAME:-ch13-$(hostname)}"
NHAN="${RUNNER_LABELS:-ch13-tam-thoi}"

go_bo() {
  # Ephemeral: GitHub tu go runner sau khi xong job. Chi can go tay khi container
  # bi dung TRUOC khi nhan job (con file .runner). REMOVE_TOKEN: token go (API remove-token).
  if [ -f .runner ] && [ -n "${REMOVE_TOKEN:-}" ]; then
    ./config.sh remove --token "$REMOVE_TOKEN" || true
  fi
}
trap go_bo EXIT

./config.sh --unattended \
  --url "$REPO_URL" --token "$RUNNER_TOKEN" \
  --name "$TEN" --labels "$NHAN" \
  --ephemeral --disableupdate --work _work

# run.sh giu ket noi long-poll toi GitHub; voi --ephemeral no thoat sau DUNG MOT job.
./run.sh
