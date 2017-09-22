#!/bin/bash

node_version=$(node -v) # Get the current node version
expected_node_version="8.5.0"
if [ "$node_version" -ne "$expected_node_version" ] ;
then
    # Use node 8.5.0
    echo "start.sh: using node 8.5.0."
    nvm use 8.5.0
fi
# Launch node normally
# clear
node --harmony src/index.js