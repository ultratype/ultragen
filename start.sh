#!/bin/bash

node_version=$(node -v) # Get the current node version
expected_node_version="8.5.0"
if [ "$node_version" != "$expected_node_version" ]
then
    # Use node 8.5.0
    echo "start.sh: using node $expected_node_version..."
    ~/.nvm/nvm.sh use 8.5.0
    echo "Set node version to $expected_node_version via nvm."
fi
# Launch node normally
# clear
node --harmony src/index.js