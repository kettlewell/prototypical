#! /usr/bin/env sh

# Exit in case of error
set -ea


PROJECT_DIR="./.."


TAG=dev \
FRONTEND_ENV=dev \
docker-compose \
--env-file ${PROJECT_DIR}/.env-common \
--env-file ${PROJECT_DIR}/.env-dev \
-f ${PROJECT_DIR}/docker-compose.common.yml \
-f ${PROJECT_DIR}/docker-compose.dev.yml \
build
