#!/bin/bash
# Stop all servers and start the server
sudo pm2 stop all
sudo pm2 start /home/ubuntu/rcgenbackend/backend/api/index.mjs