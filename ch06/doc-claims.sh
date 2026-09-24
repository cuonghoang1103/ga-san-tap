#!/usr/bin/env bash
# Xin token OIDC cua job roi in CLAIMS (phan payload da giai ma). KHONG in token, KHONG in chu ky.
# Dung: bash ch06/doc-claims.sh [audience]
set -euo pipefail
if [ -z "${ACTIONS_ID_TOKEN_REQUEST_URL:-}" ]; then
  echo "ACTIONS_ID_TOKEN_REQUEST_URL: (khong co) -> job thieu permissions id-token: write"; exit 0
fi
url="$ACTIONS_ID_TOKEN_REQUEST_URL"
[ -n "${1:-}" ] && url="$url&audience=$1"
jwt=$(curl -sS -H "Authorization: bearer $ACTIONS_ID_TOKEN_REQUEST_TOKEN" "$url" | jq -r .value)
giai() { local p=${1//-/+}; p=${p//_//}; while [ $(( ${#p} % 4 )) -ne 0 ]; do p="$p="; done; printf %s "$p" | base64 -d; }
IFS=. read -r h p _chu_ky <<< "$jwt"
echo "so phan cua JWT: $(awk -F. '{print NF}' <<< "$jwt") (header.payload.chu-ky) · do dai: ${#jwt} ky tu"
echo "--- header ---"; giai "$h" | jq -c '{alg, typ, kid: (.kid[0:12] + "…")}'
echo "--- payload (claims) ---"
giai "$p" | jq '{iss, aud, sub, repository, repository_owner, ref, ref_type, sha: .sha[0:12], event_name, environment, workflow, job_workflow_ref, runner_environment, actor, run_id, song_giay: (.exp - .iat), nbf_lech_iat: (.iat - .nbf)}'
echo "--- ten moi claim co mat ---"; giai "$p" | jq -r 'keys | join(" ")'
