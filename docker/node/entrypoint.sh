#!/bin/bash

if [ ! -f ./node_modules ]; then
  echo "Node Modules not present. Running yarn install..."
  bash -c "yarn install"
fi

bash -c  "yarn dev"