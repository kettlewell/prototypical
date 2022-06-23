FROM python:3.9-bullseye

ARG YOUR_ENV

ENV YOUR_ENV=${YOUR_ENV} \
    PYTHONFAULTHANDLER=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONHASHSEED=random \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    POETRY_VERSION=1.1.13 \
    PYTHONDONTWRITEBYTECODE=1

ENV PATH="${PATH}:/root/.local/bin"
ENV PYTHONPATH=.

WORKDIR /app


# System deps:
RUN pip install --upgrade pip
RUN pip install "poetry==$POETRY_VERSION"

# Copy only requirements to cache them in docker layer
#RUN mkdir -p /app/src
COPY . /app/
RUN ls -al /app

#COPY migrations aerich.ini poetry.lock pyproject.toml /app/
# for migrations
#COPY migrations /app/
#COPY aerich.ini /app/

#COPY src/ /app/src/

# Project initialization:
RUN poetry config virtualenvs.create false

RUN poetry install --no-interaction --no-ansi




#    && poetry install $(test "$YOUR_ENV" == production && echo "--no-dev") --no-interaction --no-ansi

# Creating folders, and files for a project:
#COPY src/ /app
####


#RUN mkdir app
#WORKDIR /app

#ENV PATH="${PATH}:/root/.local/bin"
#ENV PYTHONPATH=.

#COPY requirements.txt .
#COPY poetry.lock pyproject.toml /code/

#RUN pip install --upgrade pip && pip install poetry

#RUN poetry config virtualenvs.create false

#RUN poetry install
#RUN pip install -r requirements.txt

# for migrations
#COPY migrations .
#COPY aerich.ini .

#COPY src/ .
