FROM fedora:latest

# Install system tools (including make)
RUN dnf install -y \
    gcc \
    g++ \
    make \
    curl \
    git \
    unzip

# Install bun
RUN curl -fsSL https://bun.sh/install | bash

# Add bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Create app directory
WORKDIR /app

# Copy local project files
COPY . .

# Use the exec form for CMD to avoid the warning
CMD ["bash", "-c", "make --version && make dev"]
