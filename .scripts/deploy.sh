#!/bin/bash
# Navigate to the frontend directory
set -e

echo "Deployment started" 

cd /var/www/git

git pull origin master 
echo "New changes copied to server!" 

cd server

echo "Installing dependencies"
npm install --yes

cd ../welsan
npm install --yes

echo "Running the build"
npm run build

# Clear the existing files in the destination directory
rm -rf /var/www/welsan/*

# Copy new build files to the destination directory
cp -r build /var/www/welsan/

pm2 reload server
