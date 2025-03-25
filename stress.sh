#!/bin/bash

while true; do
    stress-ng --cpu $(nproc) --cpu-method all --iomix 4 --hdd 4 --vm 4 --vm-bytes 2G --fork 4 --fork-max 1000 --metrics --timeout 0
    sleep 1  # Small pause between retries
done