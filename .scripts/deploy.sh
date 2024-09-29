#!/bin/bash
# Navigate to the frontend directory
set -e

echo "Deployment started" 

cd /var/www/git

git pull origin master 
echo "New changes copied to server!" 


# Create .env for the server
echo "REACT_APP_CONVERTKIT_KEY=${REACT_APP_CONVERTKIT_KEY}" >> server/.env
echo "REACT_APP_CONVERTKIT_ID=${REACT_APP_CONVERTKIT_ID}" >> server/.env
echo "REACT_APP_API_URL=${REACT_APP_API_URL}" >> server/.env

# Create .env for the welsan
echo "REACT_APP_CONVERTKIT_KEY=${REACT_APP_CONVERTKIT_KEY}" >> welsan/.env
echo "REACT_APP_CONVERTKIT_ID=${REACT_APP_CONVERTKIT_ID}" >> welsan/.env
echo "REACT_APP_API_URL=${REACT_APP_API_URL}" >> welsan/.env

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

pm2 reload backend
