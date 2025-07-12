#!/bin/bash

# Print a green-colored message indicating that the server is starting
echo -e "\033[32mStarting the server at the specified port\033[0m"

cd route

# Start the server using bun, bun is taken care of docker
bun i
bun main.js
