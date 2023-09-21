#!/bin/bash

# Check if WireGuard is running
if systemctl is-active --quiet wg-quick@wg0; then
    # Disable WireGuard
    sudo systemctl stop wg-quick@wg0
    echo "WireGuard disabled."
else
    # Enable WireGuard
    sudo systemctl start wg-quick@wg0
    echo "WireGuard enabled."
fi
