#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
sudo cp -r /home/shamrock/git/TokenPeek.github.io/build/ /var/www/html/
echo "Deployment complete"
