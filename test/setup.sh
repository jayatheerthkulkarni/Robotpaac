#!/bin/bash

# This starts the server from the /route/main.js
# Please do not close the server in between
# If your test really wants to close the server please rerun the setup.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROUTE_DIR="$SCRIPT_DIR/../route"

if [[ ! -f "$ROUTE_DIR/bun.lockb" && ! -f "$ROUTE_DIR/package.json" ]]; then
  echo "Error: No bun.lockb or package.json found in route/"
  echo "→ Make sure you're using Bun and have installed the packages:"
  echo ""
  echo "   cd route && bun i"
  exit 1
fi

if [[ ! -f "$ROUTE_DIR/main.js" ]]; then
  echo "Error: main.js not found in route/"
  exit 2
fi

cd "$ROUTE_DIR"
echo "Starting server using Bun from $(pwd)/main.js..."

# Start the server in background, suppress output
nohup bun main.js >/dev/null 2>&1 &

# Success message in green
echo -e "\033[0;32mTest setup successfully completed\033[0m"
