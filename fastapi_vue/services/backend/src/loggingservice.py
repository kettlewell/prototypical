import logging

logger = logging.getLogger(__name__)  # the __name__ resolve to "backend.services"
# This will load the backend logger


class EchoService:
    def echo(self, msg):
        logger.info("echoing something from the backend logger")
        print(msg)
