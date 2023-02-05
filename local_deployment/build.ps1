# Builds the Docker image for the website
# Run this from the repository folder: ./local_deployment/build.ps1
docker build -t website:latest -f ./local_deployment/Dockerfile .
Write-Output "Successfully build Docker image for website."
