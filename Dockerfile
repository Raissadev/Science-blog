FROM node:18-alpine

LABEL version="1.0.0"
LABEL description="Project science blog"

WORKDIR /app/
COPY . ./

RUN yarn --cwd ./Backend install && \
    yarn --cwd ./Backend tools && \
    yarn --cwd ./Backend typeorm:run && \
    yarn --cwd ./Frontend install && \
    yarn --cwd ./Frontend compiler && \
    yarn global add serve && \
    yarn install && \
    yarn cache clean

EXPOSE 4000

CMD ["yarn", "start"]