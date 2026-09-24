# syntax=docker/dockerfile:1
# Anh chay app "Dat lich phong kham" — multi-stage: chi mang phu thuoc PRODUCTION sang tang chay.
# (Khoa Docker, bai multi-stage: /courses/docker)

# ── Tang 1: cai phu thuoc production ─────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund

# ── Tang 2: anh chay — khong co npm cache, khong co devDependencies ──
FROM node:22-alpine AS runtime
ENV NODE_ENV=production PORT=3000
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY src ./src
COPY public ./public
ARG APP_VERSION=dev
ENV APP_VERSION=$APP_VERSION
USER node
EXPOSE 3000
HEALTHCHECK --interval=5s --timeout=3s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/healthz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "src/server.js"]
