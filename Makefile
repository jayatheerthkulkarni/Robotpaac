# Ensure you have started the Docker service because this uses a Fedora image that might be required
# for you to start this project

# Default Docker image
IMAGE_NAME := virenv
WORKDIR := $(PWD)

# Default target
dev:
	@echo -e "\033[31mPlease make sure Docker is installed and the Docker daemon is started.\033[0m"
	@chmod +x env_start.sh
	@./env_start.sh
	@bun i
	@bun db_start.js
	@chmod +x server_start.sh
	@./server_start.sh