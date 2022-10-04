FROM node:alpine as builder

WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm i && pnpm rebuild && pnpm build && rm -rf node_modules && pnpm i --prod

FROM node:alpine as suggestion-bot

WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
