FROM fedora:42

RUN dnf -y update --refresh \
 && dnf install -y \
      gcc \
      g++ \
      make \
      curl \
      git \
      sqlite \
      unzip \
 && dnf clean all

# Install bun
RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app
COPY . .

CMD ["bash", "-c", "make --version && make dev"]