# Starts the container which holds the website. When the container stops,
# it will be deleted.
# NOTE: run this from the repository root folder: ./local_deployment/start.ps1
docker run --rm --name website -p 8080:80 -d website
Write-Output "Website successfully started and running at http://localhost:8080"