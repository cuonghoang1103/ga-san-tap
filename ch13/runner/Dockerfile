# Anh runner self-hosted TAM THOI (ephemeral) cho Chuong 13 — chi de hoc.
# Dung:   docker build -t ga13-runner ch13/runner
# Chay:   xem ch13/runner/chay-mot-job.sh (dang ky --ephemeral, chay DUNG MOT job, tu go)
FROM ubuntu:24.04

ARG RUNNER_VERSION=2.337.0
ARG RUNNER_ARCH=x64

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates curl jq git tini \
 && rm -rf /var/lib/apt/lists/*

# Runner KHONG chiu chay bang root (config.sh tu choi) => tao nguoi dung rieng.
RUN useradd --create-home --uid 1001 runner
WORKDIR /home/runner

RUN curl -fsSL -o runner.tgz \
      "https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/actions-runner-linux-${RUNNER_ARCH}-${RUNNER_VERSION}.tar.gz" \
 && tar xzf runner.tgz && rm runner.tgz \
 && ./bin/installdependencies.sh \
 && rm -rf /var/lib/apt/lists/* \
 && chown -R runner:runner /home/runner

COPY --chown=runner:runner khoi-dong.sh /home/runner/khoi-dong.sh
USER runner
ENTRYPOINT ["/usr/bin/tini", "--", "/home/runner/khoi-dong.sh"]
