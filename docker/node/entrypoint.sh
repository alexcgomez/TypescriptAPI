#!/bin/bash

if [ ! -f /app/node_modules ]; then
  echo "Node Modules not present. Running yarn install..."
  bash -c "yarn install"
fi

bash -c  "yarn run start"