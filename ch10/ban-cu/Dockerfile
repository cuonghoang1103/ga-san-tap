FROM node:22-slim
WORKDIR /app
COPY src/ ./
# healthcheck giong compose that: chi hoi MOT route (/health) bang module http cua node
HEALTHCHECK --interval=2s --timeout=2s --retries=3 CMD node -e "require('http').get('http://127.0.0.1:3001/health',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"
CMD ["node", "server.js"]
