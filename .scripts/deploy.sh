# #!/bin/bash
# # Navigate to the frontend directory
# set -e

# echo "Deployment started" 

# cd /var/www/git

# git pull origin master
# echo "New changes copied to server!" 

# # Create .env for the server
# echo "REACT_APP_CONVERTKIT_KEY=${REACT_APP_CONVERTKIT_KEY}" >> server/.env
# echo "REACT_APP_CONVERTKIT_ID=${REACT_APP_CONVERTKIT_ID}" >> server/.env
# # echo "REACT_APP_API_URL=${REACT_APP_API_URL}" >> server/.env

# # # Create .env for the welsan
# # echo "REACT_APP_CONVERTKIT_KEY=${REACT_APP_CONVERTKIT_KEY}" >> welsan/.env
# # echo "REACT_APP_CONVERTKIT_ID=${REACT_APP_CONVERTKIT_ID}" >> welsan/.env
# # echo "REACT_APP_API_URL=${REACT_APP_API_URL}" >> welsan/.env

# cd server

# echo "Installing dependencies"
# npm install --yes

# cd ../welsan
# npm install --yes

# echo "Running the build"
# npm run build

# # Create a temporary directory for the new build
# TEMP_DIR="/var/www/welsan_temp"

# # Remove the temporary directory if it exists
# rm -rf $TEMP_DIR
# mkdir $TEMP_DIR

# # Copy new build files to the temporary directory
# cp -r build/* $TEMP_DIR/

# mv $TEMP_DIR/* /var/www/welsan/

# # Remove the temporary directory
# rmdir $TEMP_DIR

# # # Clear the existing files in the destination directory
# # rm -rf /var/www/welsan/*

# # # Copy new build files to the destination directory
# # cp -r build /var/www/welsan/

# pm2 reload server2


#!/bin/bash
# Exit immediately if a command exits with a non-zero status
set -e

echo "Deployment started"

# Navigate to the git directory
cd /var/www/git

# Pull the latest changes from the master branch
git pull origin master
echo "New changes copied to server!"

# Change to the server directory
cd server

# Install dependencies for the server
echo "Installing server dependencies"
npm install --yes

# Change to the welsan (frontend) directory
cd ../welsan

# Install dependencies for the frontend
echo "Installing frontend dependencies"
npm install --yes

# Run the build process for the frontend
echo "Running the build"
npm run build

# Create a temporary directory for the new build
TEMP_DIR="/var/www/welsan_temp"

# Remove the temporary directory if it exists
rm -rf $TEMP_DIR
mkdir $TEMP_DIR

# Copy new build files to the temporary directory
cp -r build $TEMP_DIR/

# Use rsync to copy new build files, overwriting existing ones
rsync -a --delete $TEMP_DIR/ /var/www/welsan/


# Remove the temporary directory
rmdir $TEMP_DIR

# Reload the server using pm2
pm2 reload server2
echo "Deployment completed successfully"
