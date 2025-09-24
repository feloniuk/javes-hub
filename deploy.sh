#!/bin/bash
echo 'Starting deploy'
cd javes
pm2 stop javes
git pull gitlab production
npm install
npm run build
pm2 start javes
echo 'Successfully deployed'