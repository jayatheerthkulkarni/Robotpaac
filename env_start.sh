#!/bin/bash

echo -e "\033[32mConfiguring env variables\033[0m"

cd environment_check
g++ -o env env.cpp
./env
echo -e "\033[32mCreated all the environment variables needed for server\033[0m"
echo -e "\033[32mConfiguring env variables\033[0m"
echo -e "\033[32mDone\033[0m"
# Remove the executable file
rm -rf env