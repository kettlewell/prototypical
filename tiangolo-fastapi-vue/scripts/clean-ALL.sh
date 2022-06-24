#!/usr/bin/env sh

set -e

# removed the -f so that it forces a response,
# since this will remove pretty much all your docker 
# containers and images that aren't actively running.
docker system prune -a --volumes

# docker container prune -f
# docker image prune -af

# docker volume prune -f

# docker network prune -f
