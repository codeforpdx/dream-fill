FROM python:3.8-alpine AS base
LABEL authors="Jordan Witte <jordan.witte@codeforpdx.org>, Kenichi Nakamura <kenichi.nakamura@gmail.com>"

RUN pip install pipenv
RUN apk update

RUN mkdir -p /src/backend/dreamfill
WORKDIR /src/backend

ENV WORKON_HOME=/src/venvs
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN apk add --update --no-cache \
    libgcc libstdc++ libx11 glib libxrender libxext libintl \
    ttf-dejavu ttf-droid ttf-freefont ttf-liberation ttf-ubuntu-font-family \
    libffi openssl libpq wkhtmltopdf

# ---

FROM base AS build

RUN apk add build-base git libffi-dev openssl-dev

COPY Pipfile* setup.py /src/backend/
RUN cd /src/backend && pipenv install

# ---

FROM base

COPY --from=build /src/venvs /src/venvs

EXPOSE 5000
CMD ["pipenv", "run", "uwsgi", "-b 8192", "--http-timeout", "300", "--py-autoreload", "1", "--http", "0.0.0.0:5000", "--module", "dreamfill.wsgi", "--die-on-term", "--uid", "nobody"]
