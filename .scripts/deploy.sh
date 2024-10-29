
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

# Move the new build files into the production directory
mv $TEMP_DIR/build "/var/www/welsan/"

# Remove the temporary directory
rm -rf $TEMP_DIR

# Reload the server using pm2
pm2 reload server2
echo "Deployment completed successfully"
